import { useState } from "react";


const login = () => {
    
    const [isInputFilled, setIsInputFilled] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);
  
    const handleInputChange = (e) => {
      setIsInputFilled(e.target.value !== '');
    };
  
    const handleButtonHover = () => {
      if (!isInputFilled) {
        setIsButtonHovered(true);
        // setTimeout(() => {
        //   setIsButtonHovered(false);
        // }, 1000);
      }
    };
  
    return (
        <div>
        <input type="text" onChange={handleInputChange} placeholder="Enter value" />
        <button
          className={isButtonHovered ? 'ml-20 bg-blue-600' : ''}
          onMouseEnter={handleButtonHover}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Submit
        </button>
      </div>
    );
};

export default login;