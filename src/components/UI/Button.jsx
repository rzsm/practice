import styles from './Button.module.css';

export default function Button({children, className, onClick }) {
    const classNamePhrase = styles.btn + ' '+ className;
    const onClickFn = onClick ? onClick : "";

    return (
        <button className={classNamePhrase} onClick={onClickFn}>
            {children}
        </button>
    )
}
