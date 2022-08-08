import styles from './Button.module.css';

export default function Button({children, className, onClick, ...props }) {
    const classNamePhrase = styles.btn + ' '+ className;   

    return (
        <button className={classNamePhrase} onClick={onClick} {...props}>
            {children}
        </button>
    )
}
