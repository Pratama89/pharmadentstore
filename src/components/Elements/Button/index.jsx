/* eslint-disable react/prop-types */
const Button = (props) => {
    const {children, 
      ClassName, 
       
      type = "submit",
    } = props;
    
    return (
      <button 
        className={`h-16 px-6 border rounded-full ${ClassName} text-white flex mx-auto  items-center justify-between hover:bg-white hover:text-blue-500 `} type={type}
        
      >        
        {children}
      </button>
      
    );
  };

  export default Button;