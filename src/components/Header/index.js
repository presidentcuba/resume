import React, { useState, useEffect } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useLocation } from 'react-router';
import udemy from "src/images/udemy.PNG";
import mekong from "src/images/mekong.png";
import newshop from "src/images/newshop.png";
import thiendo from "src/images/thiendo1.png";
import resume from "src/images/resume.PNG";
export default function Header({ category }) {
    const listProject = [
        { name: "Mekong", biDanh: "mekong", url: mekong, title: "Project course",  link: ""},
        { name: "E-Learning", biDanh: "elearning", url: udemy, title: "Project course",  link: ""},       
        { name: "NewShop", biDanh: "newshop", url: newshop, title: "Project course",  link: ""},
        { name: "Thiendo.vn", biDanh: "thiendo", url: thiendo, title: "Project Thiendo",  link: "thiendo.vn"},
        { name: "Resume", biDanh: "resume", url: resume, title: "Project ReatJS",  link: ""},
    ];
    const [ statusMenu, setStatusMenu ] = useState(false);
    const [ subMenu, setSubMenu ] = useState(false);
    const [ navIsOpen, setNavIsOpen ] = useState(false);
    const [ classBg, setClassBg ] = useState(false);
    let page = 1;
    if (category === '/') {
        page = 2;
    }
    const handleShowMenu = () => {
        setStatusMenu(!statusMenu);
    }
        const handleSub = () => {
            setSubMenu(!subMenu);
    }
    useEffect(() => {
            const scrollNarbar = () => {
            if (window.scrollY >= 100) {
                    setNavIsOpen(true);
            } else {
                    setNavIsOpen(false);
            }
            }
            window.addEventListener("scroll", scrollNarbar);
            return () => window.addEventListener("scroll", scrollNarbar);
    }, [navIsOpen])
    return (
        <div className={`header ${page == 2 ? "bg" : ""} ${navIsOpen ? "open" : ""}`}>
            <div className="width-default">
                <nav className="header-nav">
                    <div className="nav-content">
                        <div className="row">
                            <div className="col-6 nav-content__left">
                                <div className="nav-content__left-detail">
                                    <a href="/" className="resume">RESUME</a>
                                </div>
                            </div>
                            <div className="col-6 nav-content__right">
                                <div className="nav-content__right-menu">
                                    <div className={`hide-mobile ${statusMenu === true ? "hide-menu" : ""}`}>
                                        <div onClick={handleShowMenu} className="hide-mobile-content">
                                            <span ><GrFormClose className="icon-close" /></span>
                                        </div>
                                    </div>
                                    <div className="menu-mobile">
                                        <div onClick={handleShowMenu} className="menu-mobile-content">
                                            <span><HiMenu /></span>
                                        </div>
                                    </div>
                                    <ul className={`menu-respon ${statusMenu === true ? "show-menu" : ""}`}>
                                        <li><a className="active" href="/" >HOME</a></li>
                                        <li><a href="#about" className="">ABOUT</a></li>
                                        <li><a href="#skill" className="">SKILL</a></li>
                                        <li><a href="#experience" className="">EXPERIENCES</a>
                                        </li>
                                        <li className="sub-menu">
                                            <a href="/projects" className="">PROJECT</a>
                                            {subMenu === false ? <span className="ml-2 icon" onClick={handleSub}><AiOutlineCaretDown /></span> :  <span className="icon ml-2" onClick={handleSub}><AiOutlineCaretUp /></span>}
                                            <ul className={`sub-menu-content ${subMenu === true ? "show-sub-menu" : ""}`}>
                                                {listProject.map((item, index) => (
                                                    <li><a href={`/project/${item.biDanh}`} className="">{item.name}</a></li>
                                                ))}
                                                {/* <li><a href="/" className="">project1</a></li>
                                                <li><a href="/" className="">project2</a></li>
                                                <li><a href="/" className="">project3</a></li> */}
                                            </ul>
                                        </li>
                                        <li><a href="#contact" className="">CONTACT</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
