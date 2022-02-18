import React, {useState} from "react";
import Switch from "./Switch";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { grey } from '@mui/material/colors';
import turnOffBodyScrolling from "./turnOffbodyScroll";

const UnsplashImages = (props) => {

    // Button Controls
    const [toggleOCD, setOCDToggle] = useState(false);
    const OCDToggleClick = () => {
        setOCDToggle(!toggleOCD); 
    }

    const [toggleSmallImg, setSmallImgToggle] = useState(false);
    const smallImgToggleClick = () => {
        setSmallImgToggle(!toggleSmallImg); 
    }

    const [model, setModel] = useState(false);
    const [modelImg, setModelImg] = useState({imageSource:"", imageData:""});

    const getImg = (imgSrc) => {
        setModel(true);
        if(toggleSmallImg === true)
        {
            setModelImg({imageSource:imgSrc.urls.small, imageData: imgSrc});
        }
        else {
            setModelImg({imageSource:imgSrc.urls.regular, imageData: imgSrc});
        }
    }

    // Some images do not have a descriptions if there is non display default message
    const getImageDescription = (desription) => {
        if(desription === "" || desription === null){
            return ("No Description Avaliable");
        }
        else {
            return (desription);
        }
    }

    // wait until modal is loaded before getting first name or error occures
    const getPhotoUserName = (data) => {
        if(model === true){
            return data.user.first_name;
        }
        else {
            return "";
        }
    }

    // closes the modal
    const closeModalFunc = () => {
        setModel(false)
    }
    
    return (
        <div>
            <Switch isOCDToggled={toggleOCD} onOCDToggle={OCDToggleClick} 
            isSmallImgToggled={toggleSmallImg} onSmallImgToggle={smallImgToggleClick}/>

            {turnOffBodyScrolling(model)}

            <div className={model ? "open model" : "model"} >
                <div className="imageWrapper">
                    <img src={modelImg.imageSource} alt={modelImg.description} />
                    <table className="topInfotable">
                        <tbody>
                            <tr>
                                <th>Created By</th>
                                <th></th>
                                <th>Likes</th>
                            </tr>
                            <tr>
                                <td>{getPhotoUserName(modelImg.imageData)}</td>
                                <td></td>
                                <td>{modelImg.imageData.likes}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="modalInfoDescription">
                        <tbody>
                            <tr>
                                <th>Description</th>
                            </tr>
                            <tr >
                                <td>{getImageDescription(modelImg.imageData.description)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <CancelPresentationIcon sx={{ color: grey.A100 }} color="primary" onClick={closeModalFunc}/>

                </div>
            </div>


            <div className={toggleOCD ? "photoGalleryContainerGrid" : "photoGalleryContainer"}>
                {props.photos.map((image, index) => (
                    <div className={toggleOCD ? "galleryImageContainerGrid" : "galleryImageContainer" } >
                        <div className="image">
                            <img src={image.urls.regular} key={index} alt="" onClick={() => getImg(image)} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}


export default UnsplashImages;
