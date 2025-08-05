import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";
import Button1 from "../Buttons/Button1";
import Button2 from "../Buttons/Button2";


interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  cancelText?: string;
  confirmText?: string;
  showFooter: boolean;
  size?: "small" | "medium" | "large";
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  isOpen,
  onClose,
  cancelText,
  confirmText,
  showFooter,
  size = "medium",
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    small: "max-w-md",
    medium: "max-w-lg",
    large: "max-w-2xl",
  };

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className={`w-full ${sizeClasses[size]} bg-white rounded-2xl shadow-2xl transform animate-in zoom-in-95 duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6">
          {/* Modal Title */}
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
            onClick={onClose}
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          {/* Modal Body */}
          <div className="mt-4">{children}</div>

          {/* Footer Buttons */}
          {showFooter && (
          <div className="flex gap-3 mt-8">
             <Button1
              disabled={false}
              btnName={cancelText ?? ""}
              btnType="button"
              width="w-1/2"
              onClick={onClose}
            />
            <Button2
              disabled={false}
              btnName={confirmText ?? ""}
              btnType="submit"
              width="w-1/2"
              onClick={() => console.log("Clicked")}
            />
          </div>
          )} 
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root") || document.body
  );
};

export default Modal;
