import styles from "./styles.module.scss"

export const Button = ({width, children}) => {
    const style = {
        width
    }
    return (
        <button style={style} className={styles.button}>{children}</button>
    )
}