import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  FolderKanban, 
  UserCircle, 
  GraduationCap, 
  MessageSquare, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  TrendingUp,
  Users
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Swal from 'sweetalert2';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

const handleLogout = () => {
  Swal.fire({
    title: 'Logout?',
    text: 'Kamu yakin ingin keluar dari admin?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#6366f1',
    cancelButtonColor: '#ef4444',
    confirmButtonText: 'Ya, Logout',
    cancelButtonText: 'Batal',
    background: '#0f172a',
    color: '#fff',
    backdrop: `
      rgba(15, 23, 42, 0.8)
      blur(6px)
    `,
    customClass: {
      popup: 'rounded-2xl',
      confirmButton: 'rounded-lg px-4 py-2 font-bold',
      cancelButton: 'rounded-lg px-4 py-2 font-bold'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('user');

      Swal.fire({
        title: 'Berhasil Logout',
        text: 'Sampai jumpa lagi!',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        background: '#0f172a',
        color: '#fff'
      });

      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  });
};

  const stats = [
    { label: 'Total Projects', value: '12', icon: <FolderKanban />, color: 'bg-blue-500' },
    { label: 'Messages', value: '48', icon: <MessageSquare />, color: 'bg-purple-500' },
    { label: 'Skills', value: '15', icon: <TrendingUp />, color: 'bg-green-500' },
    { label: 'Education', value: '1', icon: <GraduationCap />, color: 'bg-orange-500' },
  ];

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl flex items-center gap-6"
                >
                  <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center text-white`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl space-y-6">
                <h3 className="text-xl font-bold">Project Views</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                      <XAxis dataKey="name" stroke="#ffffff50" />
                      <YAxis stroke="#ffffff50" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20' }}
                        itemStyle={{ color: '#6366f1' }}
                      />
                      <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="glass p-8 rounded-3xl space-y-6">
                <h3 className="text-xl font-bold">Messages Received</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                      <XAxis dataKey="name" stroke="#ffffff50" />
                      <YAxis stroke="#ffffff50" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20' }}
                        itemStyle={{ color: '#22c55e' }}
                      />
                      <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3} dot={{ fill: '#22c55e' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="glass rounded-3xl overflow-hidden">
            <div className="p-8 flex justify-between items-center border-b border-white/10">
              <h3 className="text-xl font-bold">Manage Projects</h3>
              <button className="px-4 py-2 bg-primary rounded-xl font-bold text-sm flex items-center gap-2">
                <Plus size={18} /> Add Project
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-white/50 text-xs font-bold uppercase tracking-widest">
                  <tr>
                    <th className="px-8 py-4">Project</th>
                    <th className="px-8 py-4">Category</th>
                    <th className="px-8 py-4">Year</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[1, 2].map((i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/10 rounded-lg overflow-hidden">
                            <img src={`https://picsum.photos/seed/${i}/100/100`} alt="" className="w-full h-full object-cover" />
                          </div>
                          <span className="font-bold">Project {i}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-white/50">Web Development</td>
                      <td className="px-8 py-6 text-white/50">2024</td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-green-500/20 text-green-500 text-[10px] font-bold uppercase rounded-full">Published</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex gap-2">
                          <button className="p-2 text-white/50 hover:text-primary transition-colors"><Edit size={18} /></button>
                          <button className="p-2 text-white/50 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return <div className="text-center py-20 text-white/30">Feature coming soon...</div>;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-secondary border-r border-white/10 hidden lg:flex flex-col">
        <div className="p-8">
          <h2 className="text-2xl font-bold gradient-text">Admin Panel</h2>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
            { id: 'projects', label: 'Projects', icon: <FolderKanban size={20} /> },
            { id: 'profile', label: 'Profile', icon: <UserCircle size={20} /> },
            { id: 'academy', label: 'Academy', icon: <GraduationCap size={20} /> },
            { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
            { id: 'users', label: 'Admin Users', icon: <Users size={20} /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === item.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-white/50 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm text-red-500 hover:bg-red-500/10 transition-all"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-secondary/50 overflow-y-auto">
        {/* Header */}
        <header className="h-20 bg-secondary/80 backdrop-blur-md border-b border-white/10 px-8 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-bold capitalize">{activeTab}</h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold">{user?.name}</p>
              <p className="text-[10px] text-white/30 uppercase tracking-widest">{user?.role}</p>
            </div>
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
              {user?.name?.charAt(0)}
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Admin;
