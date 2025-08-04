import React from 'react';

interface ButtonProps {
  btnName: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  btnType?: 'button' | 'submit' | 'reset';
  width?: string;
  disabled?: boolean;
}

const Button1: React.FC<ButtonProps> = ({
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
      className={`py-3 text-blue-700 text-center font-medium bg-blue-100 hover:bg-blue-200 rounded-lg cursor-pointer transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed ${width || 'w-1/2'}`}
    >
      {btnName}
    </button>
  );
};

export default Button1;
