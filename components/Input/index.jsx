import styles from "./styles.module.scss"

export const Input = ({id, type, width, placeholder}) => {
    const style = {
        width
    }
    return (
        <input style={style} className={styles.input} type={type} id={id} placeholder={placeholder} />
    )
}