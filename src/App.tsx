import { useState } from 'react';
import Header from './components/Header/Header';
import SettingsModal from './components/Modals/SettingsModal';
import HeroSection from './components/HeroSection/HeroSection';
import Cards from './components/Cards/Cards';
import DemoModal from './components/Modals/DemoModal';
import NotificationContainer from './components/Notifications/NotificationContainer';
import { NotificationProvider } from './context/NotificationContext';
import CodeExample from './components/CodeExample/CodeExample';



const AppContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header onSettingsClick={() => setIsSettingsModalOpen(true)} />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        <HeroSection />
        <Cards onModalOpen={() => setIsModalOpen(true)} />
          <CodeExample/>
      </main>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SettingsModal isOpen={isSettingsModalOpen} onClose={() => setIsSettingsModalOpen(false)} />
      <NotificationContainer />
    </div>
  );
};

function App() {
  return (
    <NotificationProvider>
      <AppContent />
    </NotificationProvider>
  );
}

export default App;
