import styles from './Card.module.css'

export default function Card({ children, className }) {
    const classNamePhrase = styles.card + ' ' + className 

    return (
        <div className={classNamePhrase}>
            {children}
        </div>
    )
}
