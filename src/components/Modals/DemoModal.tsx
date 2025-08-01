import React from 'react';
import Modal from '../Modal/Modal';


interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
    isOpen={isOpen}
      onClose={onClose}
      title="Welcome to Portal Modal!"
      cancelText="Cancel"
      confirmText="Save Changes"
      showFooter={false} >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Portal Modal!</h2>
        <p className="text-gray-600 mb-6">
          This modal is rendered using React Portal, which means it's rendered outside of the normal 
          component tree in a separate DOM node. This prevents z-index conflicts and ensures proper 
          overlay behavior.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">Benefits of Portals:</h3>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• Render outside parent DOM hierarchy</li>
            <li>• Avoid z-index stacking context issues</li>
            <li>• Maintain React's event system</li>
            <li>• Perfect for modals, tooltips, dropdowns</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default DemoModal;