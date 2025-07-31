import { useState } from 'react';
import { Header } from './components/Header/Header';
import { SettingsModal } from './components/Modals/SettingsModal/SettingsModal';

function App() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  return (

     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header onSettingsClick={() => setIsSettingsModalOpen(true)} />
      <SettingsModal isOpen={isSettingsModalOpen} onClose={() => setIsSettingsModalOpen(false)} />
      
    </div>
   
  )
}

export default App
