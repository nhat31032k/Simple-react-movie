import React from 'react';

// const Button = ({onClick,className,children,type="Button",bgColor="text-primary"}) => {
//     let bgColor = "text-primary";
    
//     return (

//         <button type={type} onClick={onClick} className={`rounded-lg font-medium text-white ${text-primary} px-6 py-3 captipalize w-full mt-auto text-center ${className}`}>
//             {children}
//         </button>
//     );
// };

// export default Button;
const Button = ({...props}) => {
    let bgColor = "text-primary";
    console.log(props);
    switch (props.bgColor) {
        case "primary":
            bgColor  = "text-primary"
            break;
        case "secondary":
            bgColor = "text-secondary"
        default:
            break;
    }
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={` ${props.bgColor} ${props.className}`}
        >
            {props.children}
        </button>
    );
};

export default Button;