import React from 'react'
import { FaVolleyballBall, FaSwimmer, FaRunning, FaGamepad } from "react-icons/fa";
import { BsFillFileEarmarkCodeFill, BsFillFileEarmarkMusicFill } from "react-icons/bs";
export default function Hobbies() {
    return (
        <div className="hobbies">
            <div className="width-default">
                <div className="hobbies-content">
                    <div className="hobbies-title">
                        <h3>My Hobbies</h3>
                    </div>
                    <div className="hobbies-box">
                        <div className="hobbies-thread">
                            <span>I have a passion about sports, especially volleyball. I was player of volleyball team during my time at university and high school.</span>
                        </div>
                        <div className="hobbies-icon">
                            <div className="volleyball item">
                                <span><FaVolleyballBall /></span>
                                <p className="name">Volleyball</p>
                            </div>
                           <div className="coding item">
                               <span><BsFillFileEarmarkCodeFill /></span>
                               <p className="name">Coding</p>
                           </div>
                           <div className="music item">
                               <span><BsFillFileEarmarkMusicFill /></span>
                               <p className="name">Music</p>
                           </div>
                           <div className="swim item">
                               <span><FaSwimmer /></span>
                               <p className="name">Swim</p>
                           </div>
                           <div className="running item">
                               <span><FaRunning /></span>
                               <p className="name">Running</p>
                           </div>
                           <div className="game item">
                               <span><FaGamepad /></span>
                               <p className="name">Game</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
