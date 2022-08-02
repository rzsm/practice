import styles from './Input.module.css';

export default function Input({ label, id, inputClass, labelClass, ...props }) {   
    const labelClassPhrase = styles.label + ' ' + labelClass;
    const inputClassPhrase = styles.input + ' ' + inputClass;

    return (
        <>
            <label htmlFor={id} className={labelClassPhrase}> {label} </label>
            <input id={id} className={inputClassPhrase} {...props}/>
        </>
    )
}
