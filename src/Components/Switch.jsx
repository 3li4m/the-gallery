import React from "react";


const Switch = ({isOCDToggled, onOCDToggle, isSmallImgToggled, onSmallImgToggle}) => {
    return (
        <div className="switchTopContainer">
            <div className="switchContainer">
                <label className="switch">
                    
                    <input type="checkbox" checked={isOCDToggled} onChange={onOCDToggle} />
                    <span className="slider" />

                </label>
                <p>Neat Grid</p>
            </div>
            <div className="switchContainer switchContainerSmallerImages">
                <label className="switch">
                    
                    <input type="checkbox" checked={isSmallImgToggled} onChange={onSmallImgToggle} />
                    <span className="slider" />

                </label>
                <p>Display Smaller Images When Clicked</p>
            </div>
        </div>
    )
}

export default Switch;