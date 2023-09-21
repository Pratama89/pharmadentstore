/* eslint-disable react/prop-types */
const Button = (props) => {
    const {children, 
      ClassName      
    } = props;
    
    return (
      <div 
        className={`h-16 px-6 border rounded-full ${ClassName} text-white flex mx-auto  items-center justify-between hover:bg-white hover:text-blue-500 `} 
        
      >        
        {children}
      </div>
      
    );
  };

  export default Button;