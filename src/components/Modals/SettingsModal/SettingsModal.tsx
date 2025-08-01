import React from "react";
import Modal from "../../Modal/Modal";


interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Application Settings"
      cancelText="Cancel"
      confirmText="Save Changes"
      showFooter={true}
    >
      <div className="p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Theme Preference
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Light</option>
              <option>Dark</option>
              <option>Auto</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notification Position
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Top Right</option>
              <option>Top Left</option>
              <option>Bottom Right</option>
              <option>Bottom Left</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="enableAnimations"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              defaultChecked
            />
            <label
              htmlFor="enableAnimations"
              className="text-sm font-medium text-gray-700"
            >
              Enable animations
            </label>
          </div>
        </div>
      </div>
    </Modal>
  );
};


export default SettingsModal;
