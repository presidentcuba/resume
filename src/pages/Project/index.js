import React from 'react';
import { Link } from "react-router-dom";
import udemy from "src/images/udemy.PNG";
import mekong from "src/images/mekong.png";
import newshop from "src/images/newshop.png";
import thiendo from "src/images/thiendo1.png";
import resume from "src/images/resume.PNG";
import { AiOutlineDoubleRight, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import Slider from "react-slick";
export default function Project() {
    const listProject = [
        { name: "Mekong", biDanh: "mekong", url: mekong, title: "Project course",  link: ""},
        { name: "E-Learning", biDanh: "elearning", url: udemy, title: "Project course",  link: ""},       
        { name: "NewShop", biDanh: "newshop", url: newshop, title: "Project course",  link: ""},
        { name: "Thiendo.vn", biDanh: "thiendo", url: thiendo, title: "Project Thiendo",  link: "thiendo.vn"},
        { name: "Resume", biDanh: "resume", url: resume, title: "Project ReatJS",  link: ""},
    ];

    return (
        <div className="projects">
            <div className="width-default">
                <div className="row">
                    <div className="col-md-8 col-12 projects-left">
                        <div className="projects-content">
                            <div className="row">
                                {listProject.map((item,index) => (
                                    <div className="col-6">
                                        <div key={index} className="projects-list item"> 
                                            <div className="projects-item">
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
                                    </div>
                                ))}
                            </div>  
                        </div>
                    </div>
                    <div className="col-md-4 col-12 projects-right">
                        <div className="projects-sidebar">
                            <h1>CONTACT ME</h1>
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input className="form-control" type="text"></input>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input className="form-control" type="email"></input>
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input className="form-control" type="text"></input>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" type="textarea"></textarea>
                                </div>
                                <button type="submit" class="btn btn-success">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
