import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login
    setTimeout(() => {
      if (email === 'admin@bagusbatra.com' && password === 'password') {
        localStorage.setItem('user', JSON.stringify({ name: 'Bagus Batra', email, role: 'admin', token: 'mock-jwt-token' }));
        Swal.fire({
          title: 'Welcome Back!',
          text: 'Login successful.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          background: '#0f172a',
          color: '#fff'
        });
        navigate('/admin');
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Invalid email or password.',
          icon: 'error',
          confirmButtonColor: '#ef4444',
          background: '#0f172a',
          color: '#fff'
        });
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary to-accent/5 -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass p-8 md:p-12 rounded-3xl space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Admin Login</h1>
          <p className="text-white/50">Please enter your credentials to access the dashboard.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary transition-all"
                placeholder="admin@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 py-4 focus:outline-none focus:border-primary transition-all"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="w-full py-4 bg-primary rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/80 transition-all disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : (
              <>
                Sign In <ArrowRight size={20} />
              </>
            )}
          </motion.button>
        </form>

        <div className="text-center">
          <Link to="/" className="text-sm text-white/30 hover:text-primary transition-colors">
            Back to Website
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
