import styles from './Button.module.css';

export default function Button({children, className, onClick, ...props }) {
    const classNamePhrase = styles.btn + ' '+ className;
    const onClickFn = onClick ? onClick : "";

    return (
        <button className={classNamePhrase} onClick={onClickFn} {...props}>
            {children}
        </button>
    )
}
