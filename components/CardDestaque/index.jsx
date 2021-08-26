import styles from "./styles.module.scss";

export const CardDestaque = ({foto, nome}) => {
  const bg = {
    backgroundImage:
      `url(${foto})`,
  };
  return (
    <div className={styles.bgImage} style={bg}>
      <p className={styles.tag}>Movies</p>
      <p className={styles.name}>{nome}</p>
    </div>
  );
};
