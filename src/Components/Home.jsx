import React, {useState, useEffect} from "react";
import axios from "axios";
import Gallery from "./Gallery";
import Logo from "./GalleryHeader";
import { Pagination } from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
    const [images, setImages] = useState([]);
    // check to see if page is loading and display loading gif
    const [loading, setloading] = useState(false);

    const fetchData = async(page) =>{
        setloading(true)
        const accessKey = process.env.REACT_APP_ACCESSKEY;
        const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}&per_page=12`);
        const data = await response.data;
        setImages(data);
        setloading(false);
    }

    const pageChange = (event, value) => {
        fetchData(value)
    }

    // Make useEffect run once
    useEffect(() =>{
        fetchData(1);
    }, []);
        
    
    return(
    <div>
        <div className="container-fluid">
            
            <Logo />
            <div className="pagination">
                <Pagination  count={5} size="large" onChange={pageChange} shape="rounded" color="primary" />
            </div>
            
            {/* Display Loading Icon If Page Is Taking A Long Time To Load */}
            {loading ? <div className="loaderContainer"><ClipLoader loading={loading} size={250} /></div> : <Gallery photos={images}/> }
        </div>
    </div>
    );
} 

export default Home;