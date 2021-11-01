import React from 'react'
import cv from "src/images/cv.pdf";
export default function Summary() {
    return (
        <>
            <div className="mycv">
                <div className="width-default">
                    <a href={cv} download>DOWNLOAD MY CV</a>
                </div>
                
            </div>
            <div className="summary">
                <div className="width-default">
                    <div className="summary-content">
                        <h3>Summary</h3>
                        <p>
                            Determined and productive web developer with a passion for creative solutions. 
                        </p>
                        <p>
                            Proficent in HTML, CSS, Javascript. Dedicated to learing additional technologies and coding language.

                        </p>
                        <p>
                            Looking for a working environment that is suitable to the knowledge I have learned and I want to learn from experience and develop more in the future
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
