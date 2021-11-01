import React, { useState } from 'react'
import { AiOutlineComment } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import udemy from "src/images/udemy.PNG";
import mekong from "src/images/mekong.png";
import newshop from "src/images/newshop.png";
import thiendo from "src/images/thiendo1.png";
import resume from "src/images/resume.PNG";
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";
export default function ProjectDetail() {
    const listProject = [
        {
            name: "Mekong",
            biDanh: "mekong",
            url: mekong,
            title: "Project course",
            link: "http://mekongvietnamgroup.vn/",
            description: "mekongvietnamgroup.vn",
            member: 1,
            position: "Front End Developer",
            role: "Analyze , design layouts website. Process the logic proficient.",
            tech: "Using HTML, SCSS, Bootstrap 4, Php, MySQL...",
        },
        {  
             name: "E-Learning",
            biDanh: "elearning",
            url: udemy,
            title: "Project course",
            description: "Graduation Thesis at Cybersoft academy, E-learing website",
            link: "",
            member: 1,
            position: "Front End Developer",
            role: "Analyze , design layouts website. Process the logic proficient.",
            tech: "Using ReactJS, HTML, SCSS, Bootstrap 4, Slick...",
        },       
        {  
             name: "NewShop",
            biDanh: "newshop",
            url: newshop,
            title: "Project course",
            description: "Application for sales",
            link: "",
            member: 1,
            position: "Front End Developer",
            role: "Analyze , design layouts website. Process the logic proficient.",
            tech: "Using HTML, SCSS, Bootstrap 4, Php, MySQL...",
        },
        {   
            name: "Thiendo",
            biDanh: "thiendo",
            url: thiendo,
            title: "Project Thiendo",
            description: "thiendo.vn",
            link: "http://thiendo.vn/",
            member: 1,
            position: "Front End Developer",
            role: "Analyze , design layouts website. Process the logic proficient.",
            tech: "Using HTML, SCSS, Bootstrap 4, Php, MySQL...",
        },
        {   
            name: "Resume",
            biDanh: "resume",
            url: resume,
            title: "Project ReatJS",
            link: "",
            description: "My Resume Online",
            member: 1,
            position: "Front End Developer",
            role: "Analyze , design layouts website. Process the logic proficient.",
            tech: "Using ReactJS, HTML, SCSS, Bootstrap 4, Slick...",
        },
    ];
    const { pathname } = useLocation();
    const nameFull = pathname.split("/project/");
    const name = nameFull[1];

    const itemProject = listProject.filter((e) => {
        return e.biDanh === name;
    });
   
    return (
        <div className="project-detail">
            <div className="width-default">
                <div className="project-content">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="content-left">
                                {itemProject.map((item, index) => (
                                    <div key={index} className="content">
                                        <div className="avatar">
                                            <div className="image">
                                                <img src={item.url}></img>
                                            </div>
                                            <div className="thread">
                                                <span><AiOutlineComment /> 0</span>
                                                <span><FaUser /> By Duong Tinh</span>
                                            </div>
                                        </div>
                                        <div className="infomation">
                                            <h5>Project Information</h5>
                                            <div className="name item row">
                                                <div className="col-5"><span>Project Name</span></div>
                                                <div className="col-7"><span>{item.name}</span></div>   
                                            </div>
                                            <div className="link item row">
                                                <div className="col-5"><span>Link Website</span></div>
                                                <div className="col-7"><a href={item.link} target="_blank">{item.link}</a></div>  
                                            </div>
                                            <div className="description item row">
                                                <div className="col-5"><span>Project Describe</span></div>
                                                <div className="col-7"><span>{item.description}</span></div> 
                                            </div>
                                            <div className="member item row">
                                                <div className="col-5"><span>Member</span></div>
                                                <div className="col-7"><span>{item.member}</span></div> 
                                            </div>
                                            <div className="position item row">
                                                <div className="col-5"><span>Position</span></div>
                                                <div className="col-7"><span>{item.position}</span></div> 
                                            </div>
                                            <div className="role item row">
                                                <div className="col-5"><span>Role</span></div>
                                                <div className="col-7"><span>{item.role}</span></div> 
                                            </div>
                                            <div className="tech item row">
                                                <div className="col-5"><span>Technology</span></div>
                                                <div className="col-7"><span>{item.tech}</span></div> 
                                            </div>
                                        </div>
                                        <div className="function">
                                            <h5>Project Functions</h5>
                                            <p>Updating...</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="left-comment">
                                    <h5>Comment</h5>
                                    <form>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control" type="text"></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea className="form-control" type="textarea"></textarea>
                                        </div>
                                        <div className="form-group but">
                                            <button className="btn btn-success">Send</button>
                                        </div>
                                    </form>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="content-right">
                                <div className="image">
                                    <img src={itemProject[0].url}></img>
                                </div>
                                <div className="project-list">
                                    <h5>Project List</h5>
                                    <ul>
                                        {listProject.map((item, index) => (
                                            <li>
                                                <Link to={`/project/${item.biDanh}`}>{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="contact">
                                    <h5>CONTACT ME</h5>
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
                                        <div className="form-group but">
                                            <button type="submit" class="btn btn-success">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
