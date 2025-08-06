import React from 'react';

const CodeExample: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Portal Implementation</h3>
      <p className="text-gray-600 mb-6">
        React portals use <code className="bg-gray-100 px-2 py-1 rounded text-sm">ReactDOM.createPortal()</code> to render 
        components into DOM nodes outside the component tree.
      </p>
      <div className="bg-gray-50 rounded-xl p-6 overflow-x-auto">
        <pre className="text-sm text-gray-800">
          <code>{`import ReactDOM from 'react-dom';

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;
  
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};`}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeExample;