import React, { useState, useEffect} from 'react';
import logo from "src/images/3x4.PNG";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export default function Profile() {
    const [ navIsOpen, setNavIsOpen ] = useState(false);

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
        <div className="slider" id="about">
            <div className="width-default">
                <div className={`slider-box ${navIsOpen === false ? "slider-fixed" : ""}`}>
                    <div className="slider-content">
                        <div className="slider-content-image">
                            <img src={logo} alt=""></img>
                        </div>
                        <div className="slider-content-info">
                            <div className="info-name">
                                <div className="hello">
                                    <span>HELLO</span>
                                    <div class="arrow-up"></div>
                                </div>

                                <p className="name left">
                                    I am <span>Duong Van Tinh</span>
                                </p>
                                <p className="major right">Front End Developer</p>
                            </div>
                            <div className="info-age item">
                                <p className="left">AGE</p>
                                <span className="right">25</span>
                            </div>
                            <div className="info-address item">
                                <p className="left">ADDRESS</p>
                                <span className="right">219, Hoang Dieu 2 Str, Linh Trung Ward, Thu Duc District, Ho Chi Minh City</span>
                            </div>
                            <div className="info-email item">
                                <p className="left">EMAIL</p>
                                <span className="right">duongtinh724@gmail.com</span>
                            </div>
                            <div className="info-phone item">
                                <p className="left">PHONE</p>
                                <span className="right">(+84) 333 883 724</span>
                            </div>
                        </div>
                    </div>
                    <div className="info-contact">
                        <div className="info-fb icon">
                            <ImFacebook />
                        </div>
                        <div className="info-tw icon">
                            <AiOutlineTwitter />
                        </div>
                        <div className="info-git icon">
                            <AiFillGithub />
                        </div>
                        <div className="info-link icon">
                            <FaLinkedinIn />
                        </div>
                        <div className="info-ins icon">
                            <AiFillInstagram />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
         
           
        
    )
}
