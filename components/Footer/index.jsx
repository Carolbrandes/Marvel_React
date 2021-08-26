import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer>
      <section className={styles.footerBlack}>
        <div className={`container ${styles.footerFlex}`}>
          <div className={styles.boxRed}>Receba as Novidades da Marvel</div>

          <div className={styles.footerForm}>
            <p>
              Cadastre-se para receber nossas notícias em primeira mão{" "}
              <span className="textRed">!</span>
            </p>

            <label htmlFor="email">Seu melhor e-mail</label>
            <div className={styles.inputWrapper}>
              <Input
                type="email"
                id="email"
                width="369px"
                placeholder="Informe seu melhor e-mail"
              />
              <Button width="120px">Enviar</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.footerGray}>
        <div className={`container ${styles.footerFlex2}`}>
         
            <div className={styles.marvel}>M</div>

            <div className={`${styles.links} ${styles.width25}`}>
              <h3>A Marvel</h3>

              <a href="#">Sobre a Marvel</a>
              <a href="#">Ajuda</a>
              <a href="#">Carreiras</a>
            </div>

            <div className={`${styles.links} ${styles.width25}`}>
              <h3>Mídia</h3>

              <a href="#">Filmes</a>
              <a href="#">Quadrinhos</a>
              <a href="#">Programas de TV</a>
              <a href="#">Jogos</a>
            </div>
         
            <div className={`${styles.links} ${styles.widthBlog}`}>
              <h3>Última do blog</h3>

              <a href="#">
                <div className={styles.blogWrapper}>
                  <div className={styles.imagem}></div>
                  <p>
                    Captain Marvel Challenge invadiu o tapete vermelho do Oscar
                  </p>
                </div>

                <p className={styles.linkBlog}>Continuar lendo</p>
              </a>
            </div>

            <div className={styles.links}>
              <h3>Siga a Marvel</h3>

             <div className={styles.redesSociaisWrapper}>
             <a className={styles.redesSociais} href="#">
                <img src="./images/icons/facebook.svg" alt="Facebook" />
              </a>

              <a className={styles.redesSociais} href="#">
                <img src="./images/icons/spotify.svg" alt="Spotify" />
              </a>

              <a className={styles.redesSociais} href="#">
                <img src="./images/icons/instagram.svg" alt="Instagram" />
              </a>

              <a className={styles.redesSociais} href="#">
                <img src="./images/icons/youtube.svg" alt="Youtube" />
              </a>
             </div>
            </div>
          
        </div>
      </section>
    </footer>
  );
};
