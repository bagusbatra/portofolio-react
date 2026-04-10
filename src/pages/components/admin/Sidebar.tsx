import {
  LayoutDashboard,
  FolderKanban,
  UserCircle,
  GraduationCap,
  MessageSquare,
  Users,
  LogOut,
} from "lucide-react";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

const Sidebar = ({ activeTab, setActiveTab, onLogout }: Props) => {
  const menu = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { id: "projects", label: "Projects", icon: <FolderKanban size={20} /> },
    { id: "profile", label: "Profile", icon: <UserCircle size={20} /> },
    { id: "academy", label: "Academy", icon: <GraduationCap size={20} /> },
    { id: "messages", label: "Messages", icon: <MessageSquare size={20} /> },
    { id: "users", label: "Admin Users", icon: <Users size={20} /> },
  ];

  return (
    <aside className="w-72 bg-secondary border-r border-white/10 hidden lg:flex flex-col">
      <div className="p-8">
        <h2 className="text-2xl font-bold gradient-text">Admin Panel</h2>
      </div>

      <nav className="flex-grow px-4 space-y-2">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === item.id
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-white/50 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm text-red-500 hover:bg-red-500/10"
        >
          <LogOut size={20} /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;