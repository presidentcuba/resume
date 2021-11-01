import React from 'react'
import angular from "src/images/angular.png";
import css from "src/images/css.png";
import js from "src/images/js.png";
import html from "src/images/html.png";
import bs4 from "src/images/bs4.png";
import php from "src/images/php.png";
import react from "src/images/react.png";
import Slider from "react-slick";
export default function Skills() {
        const settings = {
        //   dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 668,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                },
            },
            ],
        };
    return (
        <div className="skill" id="skill">
            <div className="width-default">
                <div className="skill-title">
                    <h3>Professional Skill</h3>
                </div>
                <div className="skill-content">
                    <Slider {...settings} >
                        <div className="item">
                            <img src={angular}></img>
                        </div>
                        <div className="item">
                            <img src={html}></img>
                        </div>
                        <div className="item">
                            <img src={css}></img>
                        </div>
                        <div className="item">
                            <img src={js}></img>
                        </div>
                        <div className="item">
                            <img src={bs4}></img>
                        </div>
                        <div className="item">
                            <img src={react}></img>
                        </div>
                        <div className="item">
                            <img src={php}></img>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
