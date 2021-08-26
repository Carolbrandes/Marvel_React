import styles from "./styles.module.scss";
import React, { Component } from "react";
import Slider from "react-slick";
import { CardDestaque } from "../CardDestaque";
import { FcPrevious, FcNext } from "react-icons/fc";

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={styles.wrapperCarousel}>
        <div className={styles.carouselControls}>
          <h2 className="center-mobile h2">
            Personagens em destaque
          </h2>

          <div className={styles.arrows}>
            <button
              className={`${styles.button} ${styles.btnPrev}`}
              onClick={this.previous}
            >
              <FcPrevious size={30} />
            </button>
            <button
              className={`${styles.button} ${styles.btnNext}`}
              onClick={this.next}
            >
              <FcNext size={30} />
            </button>
          </div>
        </div>

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div className={styles.wrapperCard} key={1}>
            <CardDestaque
              nome="Homem Aranha"
              foto="https://terrigen-cdn-dev.marvel.com/content/prod/1x/037smm_com_crd_01.jpg"
            />
          </div>
          <div className={styles.wrapperCard} key={2}>
            <CardDestaque
              nome="Viúva Negra"
              foto="https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_com_crd_01.jpg"
            />
          </div>
          <div className={styles.wrapperCard} key={3}>
            <CardDestaque
              nome="Hulk"
              foto="https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_com_crd_01.jpg"
            />
          </div>
          <div className={styles.wrapperCard} key={4}>
            <CardDestaque
              nome="Thor"
              foto="https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_com_crd_01.jpg"
            />
          </div>
          <div className={styles.wrapperCard} key={5}>
            <CardDestaque
              nome="Pantera Negra"
              foto="https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_com_crd_01_0.jpg"
            />
          </div>

          <div className={styles.wrapperCard} key={6}>
            <CardDestaque
              nome="Thanos"
              foto="https://terrigen-cdn-dev.marvel.com/content/prod/1x/019tha_com_crd_01.jpg"
            />
          </div>

          <div className={styles.wrapperCard} key={7}>
            <CardDestaque
              nome="Homem de Ferro"
              foto="https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_com_crd_01.jpg"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
