import { TagMovies } from "../TagMovies"
import styles from "./styles.module.scss"

export const CardPersonagem = ({nome, foto}) => {
    // const imgBg = {
    //     backgroundImage: `url(${foto})`
    // }

   
   return (
       <div className={styles.personagem}>
           <div  className={styles.image}>
              
           </div>
           <div className={styles.nome}>
               {nome}
           </div>
       </div>
   )
}