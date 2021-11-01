import React from 'react';
import { Link } from "react-router-dom";
import udemy from "src/images/udemy.PNG";
import mekong from "src/images/mekong.png";
import newshop from "src/images/newshop.png";
import thiendo from "src/images/thiendo1.png";
import resume from "src/images/resume.PNG";
import { AiOutlineDoubleRight, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import Slider from "react-slick";
export default function Projects() {
    const listProject = [
        { name: "Mekong", biDanh: "mekong", url: mekong, title: "Project course",  link: ""},
        { name: "E-Learning", biDanh: "elearning", url: udemy, title: "Project course",  link: ""},       
        { name: "NewShop", biDanh: "newshop", url: newshop, title: "Project course",  link: ""},
        { name: "Thiendo.vn", biDanh: "thiendo", url: thiendo, title: "Project Thiendo",  link: "thiendo.vn"},
        { name: "Resume",  biDanh: "resume", url: resume, title: "Project ReatJS",  link: ""},
    ];
    const settings = {
        //   dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
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
        <div className="project" id="project">
            <div className="width-default">
                <div className="project-content">
                    <div className="project-title">
                        <h3>Projects</h3>
                    </div>
                    <Slider {...settings} >
                        {listProject.map((item,index) => (
                            <div key={index} className="project-list item"> 
                                <div className="project-item">
                                    <div className="image">
                                        <img src={item.url}></img>
                                        <a className="seemore" href={`/project/${item.biDanh}`}>See more</a>
                                        <div className="bg"></div>
                                    </div>
                                    <div className="thread">
                                        <h5>{item.name}</h5>
                                        <p>{item.title}</p>
                                       
                                        <div className="info">
                                            <Link className="git"> <span><AiFillGithub /></span></Link>
                                            <Link className="youtube" to=""><span><AiFillYoutube /></span></Link>
                                            <Link className="more" to=""><span><AiOutlineDoubleRight /></span></Link>
                                        </div>
                                    </div> 
                                </div>                       
                            </div>
                         ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
