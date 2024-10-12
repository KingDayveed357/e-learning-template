import React from 'react';

interface ButtonProps {  
    text: string | React.ReactNode;  
    bgColor?: string;
    textColor?: string
    border?: string  // Accept background color as a prop
}  

// Define the OrangeButton component
const Button: React.FC<ButtonProps> = ({ text, bgColor , textColor , border}) => {  
    return (  
        <button className={`${bgColor} ${border} ${textColor}  py-2 px-4 rounded hover:opacity-90 transition duration-300 ease-in-out`}>  
            {text}  
        </button>  
    );  
};

// Define the WhiteButton component
const LargeButton: React.FC<ButtonProps> = ({ text, bgColor }) => {  
    return (  
        <button className={`${bgColor} text-black font-bold py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 transition duration-300 ease-in-out`}>  
            {text}  
        </button>  
    );  
};

// Export both components
export { Button, LargeButton };
