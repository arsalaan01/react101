import { useState, useEffect } from 'react';

const Button = (props:{label:string; disabled:boolean}) => {
    const [isDisabled, setIsDisabled] = useState(props.disabled || false);


    const handleChange = () => {
        console.log(`Button clicked and current value for disabled is : ${isDisabled}`);
        
        setIsDisabled(
            prevIsDisabled => {
                const newValue = !prevIsDisabled;
                console.log(`New value for disabled is : ${newValue}`);
                if (newValue) {
                    console.log("Setting timeout to enable the button after 5 seconds");
                    setTimeout(() => {                       
                        setIsDisabled(false);                      
                    }, 5000);
                }
                return newValue;
            }
        );
    }
  return (
    <div>
        <button
            onClick={handleChange}
            disabled={false}
            style={{
            padding: '10px 20px',
            backgroundColor: isDisabled ? '#ccc' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: isDisabled ? 'not-allowed' : 'pointer'
            }}
        >
            {props.label}
        </button>
    </div>
  )
}

export default Button