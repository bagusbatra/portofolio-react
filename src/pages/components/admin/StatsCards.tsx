import { FolderKanban, MessageSquare, TrendingUp, GraduationCap } from "lucide-react";

const stats = [
  {
    label: "Total Projects",
    value: "12",
    icon: <FolderKanban />,
    color: "bg-blue-500",
  },
  {
    label: "Messages",
    value: "48",
    icon: <MessageSquare />,
    color: "bg-purple-500",
  },
  {
    label: "Skills",
    value: "15",
    icon: <TrendingUp />,
    color: "bg-green-500",
  },
  {
    label: "Education",
    value: "1",
    icon: <GraduationCap />,
    color: "bg-orange-500",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="glass p-6 rounded-2xl flex items-center gap-6">
          <div
            className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center text-white`}
          >
            {stat.icon}
          </div>

          <div>
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest">
              {stat.label}
            </p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;