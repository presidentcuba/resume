import React from 'react'
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="width-default">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="item">
                                <h5>Resume</h5>
                                <ul>
                                    <li>Portfolio - ReactJS</li>
                                    <li>Dương Văn Tỉnh</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="item">
                                <h5>Project</h5>
                                <ul>
                                    <li><a href="/project/elearning">Elearning - ReactJS</a></li>
                                    <li><a href="/project/resume">Resume - ReactJS</a></li>
                                    <li><a href="/project/thiendo">Thiendo.vn</a></li>
                                    <li><a href="/project/mekong">Mekongvietnamgroup.vn</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="item">
                                <h5>Contact</h5>
                                <ul>
                                    <li>
                                       <a href="">
                                           <FaFacebookF className="icon"/>
                                           <span>Facebook</span>
                                       </a>     
                                    </li>
                                    <li>
                                        <a href="">
                                            <AiFillGithub className="icon"/>
                                            <span>Github</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="item">
                                <h5>Address</h5>
                                <ul>
                                    <li>
                                        <GoLocation className="icon" />
                                        <span>Thu Duc D, Ho Chi Minh City</span>
                                    </li>
                                    <li>
                                        <AiOutlinePhone className="icon"/>
                                        <span>+(84) 333883724</span>
                                    </li>
                                    <li>
                                        <AiOutlineMail className="icon"/>
                                        <span>tinhdv724@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
            <div className="copyright">
                <BiCopyright className="mr-1"/>
                <span>2021. All Rights Reserved.</span>
            </div>
        </div>
    )
}
