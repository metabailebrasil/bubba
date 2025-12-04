import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-bubba-600 hover:bg-bubba-700 hover:shadow-lg focus:ring-bubba-500",
    secondary: "border-transparent text-bubba-700 bg-bubba-100 hover:bg-bubba-200 focus:ring-bubba-500",
    outline: "border-bubba-600 text-bubba-600 bg-transparent hover:bg-bubba-50 focus:ring-bubba-500",
    white: "border-transparent text-bubba-600 bg-white hover:bg-gray-50 hover:shadow-lg focus:ring-white",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;