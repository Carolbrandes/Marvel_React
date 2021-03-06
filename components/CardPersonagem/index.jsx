import { TagMovies } from "../TagMovies"
import styles from "./styles.module.scss"

export const CardPersonagem = ({nome, foto}) => {
    const imgBg = {
        backgroundImage: `url(${foto})`
    }

   
   return (
       <div style={imgBg} className={styles.personagem}>
           <div  className={styles.image}>
              <TagMovies />
           </div>
           <div className={styles.nome}>
               {nome}
           </div>
       </div>
   )
}