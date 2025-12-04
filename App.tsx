import React, { useState, useEffect } from 'react';
import { BookOpen, Info, Lock, Book } from 'lucide-react';
import { DICTIONARY_DATA } from './data';
import { Category, WordEntry } from './types';
import CategoryDropdown from './components/CategoryDropdown';
import TranslatorBox from './components/TranslatorBox';
import InfoModal from './components/InfoModal';
import DictionaryModal from './components/DictionaryModal';
import DigitalBook from './components/DigitalBook';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';

function App() {
  // State for data (initialized from the static file)
  const [dictionaryData, setDictionaryData] = useState<WordEntry[]>(DICTIONARY_DATA);
  
  // State for View Navigation
  const [currentView, setCurrentView] = useState<'app' | 'login' | 'admin'>('app');

  // UI States
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isDictionaryModalOpen, setIsDictionaryModalOpen] = useState(false);
  const [isBookOpen, setIsBookOpen] = useState(false);

  // --- Actions ---

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setIsDictionaryModalOpen(true);
  };

  const handleAddWord = (newWord: Omit<WordEntry, 'id'>) => {
    const entry: WordEntry = {
      id: `custom-${Date.now()}`,
      ...newWord
    };
    setDictionaryData(prev => [entry, ...prev]);
  };

  const handleEditWord = (id: string, updatedData: Omit<WordEntry, 'id'>) => {
    setDictionaryData(prev => prev.map(item => 
      item.id === id ? { ...item, ...updatedData } : item
    ));
  };

  const handleDeleteWord = (id: string) => {
    setDictionaryData(prev => prev.filter(item => item.id !== id));
  };

  // --- Render Views ---

  if (currentView === 'login') {
    return (
      <AdminLogin 
        onLogin={() => setCurrentView('admin')} 
        onBack={() => setCurrentView('app')} 
      />
    );
  }

  if (currentView === 'admin') {
    return (
      <AdminDashboard 
        data={dictionaryData}
        onLogout={() => setCurrentView('app')}
        onAdd={handleAddWord}
        onEdit={handleEditWord}
        onDelete={handleDeleteWord}
      />
    );
  }

  // Default App View
  return (
    <div className="min-h-screen pb-12 bg-slate-50">
      <InfoModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
      
      <DictionaryModal 
        isOpen={isDictionaryModalOpen} 
        onClose={() => setIsDictionaryModalOpen(false)}
        category={selectedCategory}
        setCategory={setSelectedCategory}
        data={dictionaryData} // Pass dynamic data
      />

      <DigitalBook 
        isOpen={isBookOpen}
        onClose={() => setIsBookOpen(false)}
        data={dictionaryData}
      />

      {/* Header / Nav */}
      <header className="bg-papua-600 border-b border-papua-700 sticky top-0 z-20 shadow-lg text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-papua-600 shadow-md transition-transform hover:scale-105 shrink-0">
              <BookOpen size={28} />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-white leading-tight">Kamus Bahasa Mee/Ekari</h1>
              <p className="text-xs md:text-sm text-papua-100">Bahasa Suku Mee - Papua</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3">
            {/* Book Button */}
            <button 
              onClick={() => setIsBookOpen(true)}
              className="text-papua-100 hover:text-white transition-colors p-2 rounded-full hover:bg-papua-500"
              title="Buku Digital"
            >
              <Book size={24} />
            </button>

            <div className="w-px h-6 bg-papua-500 mx-1"></div>

            {/* Dropdown Menu for Dictionary Browsing */}
            <CategoryDropdown 
              selectedCategory={selectedCategory} 
              onSelect={handleCategorySelect} 
            />
            
            <div className="w-px h-6 bg-papua-500 mx-1"></div>

            <button 
              onClick={() => setIsInfoModalOpen(true)}
              className="text-papua-100 hover:text-white transition-colors p-2 rounded-full hover:bg-papua-500"
              title="Tentang Aplikasi"
            >
              <Info size={24} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-10">
        {/* Translator Section - Only feature on main page now */}
        <section className="mb-10 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-papua-800 mb-2">Penerjemah Bahasa</h2>
            <p className="text-slate-500">Masukkan kata untuk menerjemahkan antara Bahasa Indonesia dan Mee/Ekari</p>
          </div>
          <TranslatorBox data={dictionaryData} />
        </section>

        {/* Cultural Banner - Interactive Cards */}
        <section className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
           <button 
             onClick={() => handleCategorySelect(Category.NATURE)}
             className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center hover:shadow-lg hover:border-papua-300 transition-all group"
           >
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">🏔️</div>
              <h3 className="font-bold text-slate-800 mb-2 group-hover:text-papua-700 transition-colors">Alam Papua</h3>
              <p className="text-sm text-slate-500">Pelajari istilah alam dan lingkungan tempat tinggal suku Mee.</p>
           </button>
           
           <button 
             onClick={() => handleCategorySelect(Category.PEOPLE)}
             className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center hover:shadow-lg hover:border-papua-300 transition-all group"
           >
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-slate-800 mb-2 group-hover:text-papua-700 transition-colors">Keluarga</h3>
              <p className="text-sm text-slate-500">Sapaan kekerabatan yang sangat penting dalam struktur sosial.</p>
           </button>
           
           <button 
             onClick={() => handleCategorySelect(Category.BASICS)}
             className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center hover:shadow-lg hover:border-papua-300 transition-all group"
           >
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">💬</div>
              <h3 className="font-bold text-slate-800 mb-2 group-hover:text-papua-700 transition-colors">Percakapan</h3>
              <p className="text-sm text-slate-500">Kosakata sehari-hari untuk komunikasi yang lancar.</p>
           </button>
        </section>
      </main>

      <footer className="mt-20 py-8 border-t border-slate-200 bg-white text-center">
        <div className="flex items-center justify-center gap-2">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Kamus Bahasa Mee/Ekari. Melestarikan budaya Papua.
          </p>
          <button 
            onClick={() => setCurrentView('login')}
            className="text-slate-300 hover:text-papua-600 transition-colors"
            title="Admin Login"
          >
            <Lock size={14} />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;