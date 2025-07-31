import React from 'react';

interface ButtonProps {
  btnName: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  btnType?: 'button' | 'submit' | 'reset';
  width?: string;
  disabled?: boolean;
}

const Button2: React.FC<ButtonProps> = ({
  btnName,
  onClick,
  btnType = 'button',
  width,
  disabled = false,
}) => {
  return (
    <button
      type={btnType}
      onClick={onClick}
      disabled={disabled}
      className={`py-3 text-white text-center font-medium bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed ${width || 'w-1/2'}`}
    >
      {btnName}
    </button>
  );
};

export default Button2;
