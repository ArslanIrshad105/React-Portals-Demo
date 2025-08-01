import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, Info, Bell, Atom } from 'lucide-react';
import Button2 from '../Buttons/Button2';
// import { Tooltip } from './Tooltip';
// import { useNotifications } from '../contexts/NotificationContext';

interface DemoCardsProps {
  onModalOpen: () => void;
}

const Cards: React.FC<DemoCardsProps> = ({ onModalOpen }) => {
//   const { addNotification } = useNotifications();

  const handleShowNotification = (type: 'success' | 'warning' | 'error' | 'info') => {
    const messages = {
      success: 'Operation completed successfully!',
      warning: 'Please check your input values.',
      error: 'Something went wrong. Please try again.',
      info: 'Here\'s some helpful information.'
    };

    // addNotification({
    //   id: Date.now().toString(),
    //   type,
    //   message: messages[type],
    //   duration: 4000
    // });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Modal Demo Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
          {/* <div className="w-6 h-6 bg-blue-500 rounded-lg"></div> */}
          <Atom className="w-6 h-6 text-blue-500 rounded-lg" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Modal System</h3>
        <p className="text-gray-600 mb-6">
          Modals that render outside the main component tree, preventing z-index issues and enabling proper overlay behavior.
        </p>
         <Button2
              disabled={false}
              btnName="Open Modal"
              btnType="submit"
              width="w-full"
              onClick={onModalOpen}
            />
      </div>

      {/* Tooltip Demo Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
          <Info className="w-6 h-6 text-purple-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Tooltip System</h3>
        <p className="text-gray-600 mb-6">
          Intelligent tooltips that position themselves relative to the viewport, not constrained by parent containers.
        </p>
        <div className="space-y-3">
          {/* <Tooltip content="This tooltip appears on the top!" position="top">
            <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-4 rounded-lg transition-colors">
              Top Tooltip
            </button>
          </Tooltip>
          <Tooltip content="This tooltip appears on the right!" position="right">
            <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-4 rounded-lg transition-colors">
              Right Tooltip
            </button>
          </Tooltip> */}
        </div>
      </div>

      {/* Notifications Demo Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
          <Bell className="w-6 h-6 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Notifications System</h3>
        <p className="text-gray-600 mb-6">
          Toast notifications that appear at fixed viewport positions, independent of scroll position.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleShowNotification('success')}
            className="bg-green-100 hover:bg-green-200 text-green-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm flex items-center gap-1"
          >
            <CheckCircle className="w-4 h-4" />
            Success
          </button>
          <button
            onClick={() => handleShowNotification('warning')}
            className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm flex items-center gap-1"
          >
            <AlertTriangle className="w-4 h-4" />
            Warning
          </button>
          <button
            onClick={() => handleShowNotification('error')}
            className="bg-red-100 hover:bg-red-200 text-red-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm flex items-center gap-1"
          >
            <XCircle className="w-4 h-4" />
            Error
          </button>
          <button
            onClick={() => handleShowNotification('info')}
            className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-3 rounded-lg transition-colors text-sm flex items-center gap-1"
          >
            <Info className="w-4 h-4" />
            Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;