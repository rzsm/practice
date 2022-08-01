import styles from './Card.module.css'

export default function Card({ children, className }) {
    const classNamePhrase = className + ' ' + styles.card

    return (
        <div className={classNamePhrase}>
            {children}
        </div>
    )
}
