import React, {useState} from 'react'

export default function Experience() {
    const [status, setStatus] = useState(1);
    const handleChangeStatus = (status) => {
        setStatus(status);
    }
    console.log(status);
    return (
        <div className="experience" id="experience">
            <div className="width-default">
                <div className="experience-content">
                    <div className="experience-content__title">
                        <h3 onClick={()=> handleChangeStatus(1)} className={`box ${status === 1 ? "active" : ""}`}>Experiences</h3>
                        <h3 onClick={()=> handleChangeStatus(2)} className={`box ${status === 2 ? "active" : ""}`}>Education</h3>
                    </div>
                    <div className="experience-content__detail">
                        <div className={`experience-content__detail-exp ${status === 1 ? "open" : ""}`}>
                            <div className={`box ${status === 1 ? "active1" : ""}`}>
                                <div className="current">
                                    <div className="current-item">
                                        <div className="arrow-right"></div>
                                        <h5>DEC  2020 TO CURRENT</h5>
                                        <p className="company">Front End Developer - THIENTU CO .,LTD</p>
                                        <p className="par">Participating projects - </p>
                                        <p>thiendo.vn, hegka.com, mekongvietnamgroup.com...</p>
                                    </div>
                                </div>
                                <div className="past">
                                    <div className="pass-empty"></div>
                                    <div className="past-item">
                                        <div className="arrow-left"></div>
                                        <h5>MAR 2020 TO OCT 2020</h5>
                                        <p className="company">Internship - Cybersoft Academy</p>
                                        <p className="par">Participating projects - </p>
                                        <p>E-learing, To do list Online...</p>
                                    </div>
                                </div>
                            </div>                            
                        </div>

                        <div className={`experience-content__detail-edu ${status === 2 ? "open" : ""}`}>
                            <div className={`box ${status === 2 ? "active1" : ""}`}>
                                <div className="past">
                                    <div className="pass-empty"></div>
                                    <div className="past-item">
                                        <div className="arrow-left"></div>
                                        <h5>OCT 2014 TO MAR 2019</h5>
                                        <p className="company">Ho Chi Minh City University of Technology and Educatiion</p>
                                        <p className="par">Major:</p>
                                        <p>Electronics and Communications Engineering Technology</p>
                                    </div>
                                </div>
                                <div className="current">
                                    <div className="current-item">
                                        <div className="arrow-right"></div>
                                        <h5>MAR 2020 TO OCT 2020</h5>
                                        <p className="company">Cybersoft Cademy</p>
                                        <p className="par">Front-End:</p>
                                        <p>HTML, CSS, JavaScript, ReactJS, Redux, Redux-thunk, Angular</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
