import React, { useState } from 'react';
import { Lock, ArrowLeft } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
  onBack: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onBack }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded password for demo purposes
    if (password === 'admin123') {
      onLogin();
    } else {
      setError('Password salah. Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-papua-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-papua-100 p-8 animate-in fade-in zoom-in-95 duration-300">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-papua-100 text-papua-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Admin Login</h2>
          <p className="text-slate-500 text-sm mt-1">Masuk untuk mengelola kamus</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-papua-500 focus:ring-2 focus:ring-papua-200 outline-none transition-all"
              placeholder="Masukkan password admin..."
              autoFocus
            />
            {error && <p className="text-red-500 text-xs mt-2 font-medium">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-papua-600 hover:bg-papua-700 text-white font-bold py-3 rounded-lg transition-colors shadow-sm"
          >
            Masuk
          </button>
        </form>

        <button
          onClick={onBack}
          className="w-full mt-4 flex items-center justify-center gap-2 text-slate-400 hover:text-slate-600 text-sm py-2 transition-colors"
        >
          <ArrowLeft size={16} />
          Kembali ke Aplikasi
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;