import { useState } from 'react';
import Header from './components/Header/Header';
import SettingsModal from './components/Modals/SettingsModal';
import HeroSection from './components/HeroSection/HeroSection';
import Cards from './components/Cards/Cards';
import DemoModal from './components/Modals/DemoModal';



function App() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (

     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header onSettingsClick={() => setIsSettingsModalOpen(true)} />
      <SettingsModal isOpen={isSettingsModalOpen} onClose={() => setIsSettingsModalOpen(false)} />
        <main className="max-w-6xl mx-auto px-6 py-12">
        <HeroSection />
        <Cards onModalOpen={() => setIsModalOpen(true)} />
      </main>
       <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
    </div>
   
  )
}

export default App
