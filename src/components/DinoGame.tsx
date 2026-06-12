import { useEffect, useRef, useState, useCallback } from "react";
import { RotateCcw } from "lucide-react";

const GRAVITY = 0.55;
const JUMP_FORCE = -11;
const GROUND_Y = 162;
const DINO_X = 60;

type ObstacleType = "small" | "tall" | "group";

interface Obstacle {
  x: number;
  w: number;
  h: number;
  type: ObstacleType;
}

function rect(x: number, y: number, w: number, h: number) {
  return { x, y, w, h };
}

function overlap(
  a: { x: number; y: number; w: number; h: number },
  b: { x: number; y: number; w: number; h: number },
) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

export default function DinoGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    try {
      return Number(localStorage.getItem("dino-high") || "0");
    } catch {
      return 0;
    }
  });
  const [status, setStatus] = useState<"idle" | "playing" | "over">("idle");

  const dino = useRef({ y: 0, vy: 0, grounded: true, leg: 0 });
  const obstacles = useRef<Obstacle[]>([]);
  const speed = useRef(6);
  const curScore = useRef(0);
  const frame = useRef(0);
  const spawnTimer = useRef(0);
  const used = useRef(false);

  const reset = useCallback(() => {
    dino.current = { y: GROUND_Y - 44, vy: 0, grounded: true, leg: 0 };
    obstacles.current = [];
    speed.current = 6;
    curScore.current = 0;
    frame.current = 0;
    spawnTimer.current = 0;
    setScore(0);
    setStatus("playing");
  }, []);

  const jump = useCallback(() => {
    if (status === "idle") {
      reset();
      return;
    }
    if (status !== "playing") return;
    if (dino.current.grounded) {
      dino.current.vy = JUMP_FORCE;
      dino.current.grounded = false;
    }
  }, [status, reset]);

  useEffect(() => {
    const cb = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", cb);
    return () => window.removeEventListener("keydown", cb);
  }, [jump]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 200;

    let raf: number;

    function spawn() {
      const r = Math.random();
      let type: ObstacleType;
      let w: number;
      let h: number;
      if (r < 0.45) {
        type = "small";
        w = 18;
        h = 34;
      } else if (r < 0.8) {
        type = "tall";
        w = 18;
        h = 48;
      } else {
        type = "group";
        w = 38;
        h = 34;
      }
      obstacles.current.push({ x: 600, w, h, type });
    }

    function update() {
      if (status !== "playing") return;
      frame.current++;

      // dino physics
      const d = dino.current;
      d.vy += GRAVITY;
      d.y += d.vy;
      if (d.y >= GROUND_Y - 44) {
        d.y = GROUND_Y - 44;
        d.vy = 0;
        d.grounded = true;
      }
      if (d.grounded && frame.current % 6 === 0) {
        d.leg = (d.leg + 1) % 4;
      }

      // speed
      if (frame.current % 300 === 0) {
        speed.current = Math.min(speed.current + 0.4, 14);
      }

      // score
      if (frame.current % 5 === 0) {
        curScore.current++;
        setScore(curScore.current);
      }

      // move obstacles
      obstacles.current = obstacles.current
        .map((o) => ({ ...o, x: o.x - speed.current }))
        .filter((o) => o.x + o.w > 0);

      // spawn
      spawnTimer.current--;
      if (spawnTimer.current <= 0) {
        spawn();
        const gap = Math.max(120, 200 - speed.current * 6);
        spawnTimer.current = Math.floor(gap + Math.random() * 80);
      }

      // collision
      const dinoBox = rect(DINO_X + 5, d.y + 4, 30, d.grounded ? 36 : 34);
      for (const o of obstacles.current) {
        const obsBox = rect(o.x + 3, GROUND_Y - o.h + 4, o.w - 6, o.h - 6);
        if (overlap(dinoBox, obsBox)) {
          setStatus("over");
          const hs = Math.max(curScore.current, highScore);
          setHighScore(hs);
          try {
            localStorage.setItem("dino-high", String(hs));
          } catch {}
          return;
        }
      }
    }

    function drawDino(x: number, y: number) {
      const d = dino.current;
      ctx.fillStyle = "#84cc16";

      // body
      ctx.beginPath();
      ctx.roundRect(x, y, 40, 44, 6);
      ctx.fill();

      // eye
      ctx.fillStyle = "#0b1222";
      ctx.fillRect(x + 27, y + 8, 6, 6);

      // mouth line
      ctx.fillRect(x + 28, y + 20, 8, 2);

      // arms
      ctx.fillStyle = "#65a30d";
      ctx.fillRect(x + 2, y + 18, 8, 4);
      ctx.fillRect(x + 2, y + 23, 4, 4);

      // legs
      const ly = y + 44;
      if (d.grounded) {
        const off = Math.sin((d.leg / 4) * Math.PI * 2) * 5;
        ctx.fillRect(x + 7, ly - 2, 9, 6 + off);
        ctx.fillRect(x + 24, ly - 2, 9, 6 - off);
      } else {
        ctx.fillRect(x + 7, ly - 2, 9, 8);
        ctx.fillRect(x + 24, ly - 2, 9, 12);
      }
    }

    function drawObstacles() {
      for (const o of obstacles.current) {
        const y = GROUND_Y - o.h;

        // main body
        ctx.fillStyle = "#facc15";
        ctx.fillRect(o.x, y, o.w, o.h);

        // ridges
        ctx.fillStyle = "#eab308";
        if (o.type === "small" || o.type === "tall") {
          ctx.fillRect(o.x + 4, y + 4, 3, o.h - 10);
          ctx.fillRect(o.x + o.w - 7, y + 4, 3, o.h - 10);
        } else {
          ctx.fillRect(o.x + 6, y + 4, 3, o.h - 10);
          ctx.fillRect(o.x + o.w - 9, y + 4, 3, o.h - 10);
          ctx.fillRect(o.x + (o.w - 3) / 2, y + 4, 3, o.h - 10);
        }
      }
    }

    function drawGround() {
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(0, GROUND_Y, 600, 2);

      ctx.fillStyle = "#334155";
      for (let x = 0; x < 600; x += 18) {
        const off = (frame.current * speed.current * 0.5) % 18;
        ctx.fillRect(x - off, GROUND_Y + 6, 2, 2);
        ctx.fillRect(x - off + 9, GROUND_Y + 12, 2, 2);
      }
    }

    function draw() {
      ctx.fillStyle = "#0b1222";
      ctx.fillRect(0, 0, 600, 200);
      drawGround();

      if (status === "idle") {
        drawDino(DINO_X, GROUND_Y - 44);
        ctx.fillStyle = "#94a3b8";
        ctx.font = '14px "Plus Jakarta Sans", monospace';
        ctx.textAlign = "center";
        ctx.fillText("Press SPACE to jump", 300, 70);
        return;
      }

      drawObstacles();
      drawDino(DINO_X, dino.current.y);
    }

    function loop() {
      update();
      draw();
      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [status, highScore]);

  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center gap-4 backdrop-blur-md">
      <div className="w-full flex items-center justify-between border-b border-white/15 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
          <span className="font-mono text-[11px] tracking-widest text-[#5d6880] uppercase font-bold">
            ARCADE BREAK :: DINO RUN
          </span>
        </div>
        <div className="font-mono text-[11px] text-brand-accent uppercase tracking-widest font-bold">
          Score: {score} · Best: {highScore}
        </div>
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          className="rounded-lg border border-white/10 shadow-2xl max-w-full cursor-pointer"
          style={{ width: 600, height: 200 }}
          onClick={jump}
        />
        {status === "over" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#03040c]/80 rounded-lg">
            <p className="font-display text-lg font-bold text-white tracking-tight">
              Game Over
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

      <p className="text-center font-mono text-[10px] text-[#5d6880] uppercase tracking-wide font-bold">
        Press SPACE or tap to jump · dodge the cacti
      </p>
    </div>
  );
}
