import React from 'react';
import { Settings, Zap } from 'lucide-react';
// import { Tooltip } from './Tooltip';

interface HeaderProps {
  onSettingsClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSettingsClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">React Portals Demo</h1>
              <p className="text-sm text-gray-600">Advanced portal implementations</p>
            </div>
          </div>
          
          {/* <Tooltip content="Open application settings" position="bottom">
            <button
              onClick={onSettingsClick}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-700" />
            </button>
          </Tooltip> */}
        </div>
      </div>
    </header>
  );
};