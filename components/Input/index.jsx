import styles from "./styles.module.scss"

export const Input = ({id, type, width, placeholder, value, setValue}) => {
    const style = {
        width
    }
    return (
        <input value={value} onChange={({target}) => setValue(target.value)} style={style} className={styles.input} type={type} id={id} placeholder={placeholder} />
    )
}