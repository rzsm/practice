import classes from './Button.module.css';

export default function Button({ className, children, ...props}) {    
  return (
    <button 
        {...props}
        className={`${classes.button} ${className}`}
    >
        {children}
    </button>
  )
}
