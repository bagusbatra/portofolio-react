import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

const CELL = 24;

// 1 = wall, 0 = path
const MAZE = [
  "1111111111111",
  "1000000000001",
  "1011101110101",
  "1010000000101",
  "1010111110101",
  "1000100010001",
  "1010111110101",
  "1010000000101",
  "1011101110101",
  "1000000000001",
  "1111111111111",
].map((row) => row.split("").map(Number));

const ROWS = MAZE.length;
const COLS = MAZE[0].length;

const PACMAN_START = { x: 1, y: 1 };
const GHOST_STARTS = [
  { x: 11, y: 9 },
  { x: 6, y: 5 },
];
const GHOST_COLORS = ["#f87171", "#f472b6"];

type Direction = "up" | "down" | "left" | "right" | null;

const DELTAS: Record<Exclude<Direction, null>, { dx: number; dy: number }> = {
  up: { dx: 0, dy: -1 },
  down: { dx: 0, dy: 1 },
  left: { dx: -1, dy: 0 },
  right: { dx: 1, dy: 0 },
};

function isWalkable(x: number, y: number) {
  if (y < 0 || y >= ROWS || x < 0 || x >= COLS) return false;
  return MAZE[y][x] === 0;
}

function buildPellets() {
  const pellets: boolean[][] = MAZE.map((row) => row.map(() => false));
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (MAZE[y][x] === 0) {
        const isPacmanStart = x === PACMAN_START.x && y === PACMAN_START.y;
        const isGhostStart = GHOST_STARTS.some((g) => g.x === x && g.y === y);
        if (!isPacmanStart && !isGhostStart) {
          pellets[y][x] = true;
        }
      }
    }
  }
  return pellets;
}

export default function PacmanGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pacmanRef = useRef({ ...PACMAN_START });
  const directionRef = useRef<Direction>(null);
  const queuedDirectionRef = useRef<Direction>(null);
  const ghostsRef = useRef(GHOST_STARTS.map((g) => ({ ...g })));
  const pelletsRef = useRef(buildPellets());

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");

  const reset = useCallback(() => {
    pacmanRef.current = { ...PACMAN_START };
    directionRef.current = null;
    queuedDirectionRef.current = null;
    ghostsRef.current = GHOST_STARTS.map((g) => ({ ...g }));
    pelletsRef.current = buildPellets();
    setScore(0);
    setLives(3);
    setStatus("playing");
  }, []);

  const setDirection = useCallback((dir: Direction) => {
    queuedDirectionRef.current = dir;
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          setDirection("up");
          e.preventDefault();
          break;
        case "ArrowDown":
        case "s":
        case "S":
          setDirection("down");
          e.preventDefault();
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          setDirection("left");
          e.preventDefault();
          break;
        case "ArrowRight":
        case "d":
        case "D":
          setDirection("right");
          e.preventDefault();
          break;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setDirection]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = COLS * CELL;
    canvas.height = ROWS * CELL;

    let raf: number;
    let lastTick = 0;
    const TICK_MS = 220;

    const tick = () => {
      if (status !== "playing") return;

      // Resolve direction
      const queued = queuedDirectionRef.current;
      if (queued) {
        const d = DELTAS[queued];
        const nx = pacmanRef.current.x + d.dx;
        const ny = pacmanRef.current.y + d.dy;
        if (isWalkable(nx, ny)) {
          directionRef.current = queued;
          queuedDirectionRef.current = null;
        }
      }

      const dir = directionRef.current;
      if (dir) {
        const d = DELTAS[dir];
        const nx = pacmanRef.current.x + d.dx;
        const ny = pacmanRef.current.y + d.dy;
        if (isWalkable(nx, ny)) {
          pacmanRef.current = { x: nx, y: ny };
        }
      }

      // Eat pellet
      const { x, y } = pacmanRef.current;
      if (pelletsRef.current[y][x]) {
        pelletsRef.current[y][x] = false;
        setScore((s) => s + 10);
      }

      // Move ghosts randomly toward an open cell, biased toward pacman
      ghostsRef.current = ghostsRef.current.map((ghost) => {
        const options: Direction[] = (["up", "down", "left", "right"] as const).filter((d) => {
          const delta = DELTAS[d];
          return isWalkable(ghost.x + delta.dx, ghost.y + delta.dy);
        });
        if (options.length === 0) return ghost;

        options.sort((a, b) => {
          const da = DELTAS[a as Exclude<Direction, null>];
          const db = DELTAS[b as Exclude<Direction, null>];
          const distA = Math.abs(ghost.x + da.dx - pacmanRef.current.x) + Math.abs(ghost.y + da.dy - pacmanRef.current.y);
          const distB = Math.abs(ghost.x + db.dx - pacmanRef.current.x) + Math.abs(ghost.y + db.dy - pacmanRef.current.y);
          return distA - distB;
        });

        const chooseChase = Math.random() < 0.5;
        const pick = chooseChase ? options[0] : options[Math.floor(Math.random() * options.length)];
        const delta = DELTAS[pick as Exclude<Direction, null>];
        return { x: ghost.x + delta.dx, y: ghost.y + delta.dy };
      });

      // Check collisions
      const hit = ghostsRef.current.some((g) => g.x === pacmanRef.current.x && g.y === pacmanRef.current.y);
      if (hit) {
        setLives((prev) => {
          const next = prev - 1;
          if (next <= 0) {
            setStatus("lost");
          } else {
            pacmanRef.current = { ...PACMAN_START };
            directionRef.current = null;
            queuedDirectionRef.current = null;
            ghostsRef.current = GHOST_STARTS.map((g) => ({ ...g }));
          }
          return next;
        });
      }

      // Check win
      const pelletsLeft = pelletsRef.current.some((row) => row.some(Boolean));
      if (!pelletsLeft) {
        setStatus("won");
      }
    };

    const draw = () => {
      ctx.fillStyle = "#0b1222";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Walls
      ctx.fillStyle = "#1e293b";
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          if (MAZE[y][x] === 1) {
            ctx.fillRect(x * CELL, y * CELL, CELL, CELL);
          }
        }
      }

      // Pellets
      ctx.fillStyle = "#facc15";
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          if (pelletsRef.current[y][x]) {
            ctx.beginPath();
            ctx.arc(x * CELL + CELL / 2, y * CELL + CELL / 2, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Ghosts
      ghostsRef.current.forEach((g, i) => {
        ctx.fillStyle = GHOST_COLORS[i % GHOST_COLORS.length];
        ctx.beginPath();
        ctx.arc(g.x * CELL + CELL / 2, g.y * CELL + CELL / 2, CELL / 2 - 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Pacman
      const p = pacmanRef.current;
      ctx.fillStyle = "#facc15";
      ctx.beginPath();
      ctx.arc(p.x * CELL + CELL / 2, p.y * CELL + CELL / 2, CELL / 2 - 2, 0.25 * Math.PI, 1.75 * Math.PI);
      ctx.lineTo(p.x * CELL + CELL / 2, p.y * CELL + CELL / 2);
      ctx.fill();
    };

    const loop = (time: number) => {
      if (time - lastTick > TICK_MS) {
        tick();
        lastTick = time;
      }
      draw();
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [status]);

  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center gap-4 backdrop-blur-md">
      <div className="w-full flex items-center justify-between border-b border-white/15 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
          <span className="font-mono text-[11px] tracking-widest text-[#5d6880] uppercase font-bold">
            ARCADE BREAK :: PAC-BAGUS
          </span>
        </div>
        <div className="font-mono text-[11px] text-brand-accent uppercase tracking-widest font-bold">
          Score: {score} · Lives: {lives}
        </div>
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          className="rounded-lg border border-white/10 shadow-2xl max-w-full"
          style={{ width: COLS * CELL, height: ROWS * CELL }}
        />
        {status !== "playing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#03040c]/80 rounded-lg">
            <p className="font-display text-lg font-bold text-white tracking-tight">
              {status === "won" ? "You cleared the board!" : "Game Over"}
            </p>
            <button
              onClick={reset}
              className="flex items-center gap-2 py-2 px-4 rounded-full bg-brand-accent text-white text-[11px] font-mono tracking-widest uppercase font-semibold hover:bg-brand-accent/90 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Play Again
            </button>
          </div>
        )}
      </div>

      {/* On-screen controls */}
      <div className="grid grid-cols-3 gap-2 md:hidden">
        <div />
        <button
          onClick={() => setDirection("up")}
          className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 active:bg-brand-accent/40"
          aria-label="Move up"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
        <div />
        <button
          onClick={() => setDirection("left")}
          className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 active:bg-brand-accent/40"
          aria-label="Move left"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setDirection("down")}
          className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 active:bg-brand-accent/40"
          aria-label="Move down"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
        <button
          onClick={() => setDirection("right")}
          className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 active:bg-brand-accent/40"
          aria-label="Move right"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <p className="text-center font-mono text-[10px] text-[#5d6880] uppercase tracking-wide font-bold">
        Use arrow keys or WASD to move · avoid the ghosts · eat every dot
      </p>
    </div>
  );
}
