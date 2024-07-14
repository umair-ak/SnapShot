/* eslint-disable react/prop-types */
import { useState } from "react";
import React from "react";
import PhotoContext from "./PhotoContext";

const PhotoContextProvider = ({children}) =>{
    const [photos,setPhotos] = useState([]);

    return(
        <PhotoContext.Provider value={{ photos}}>
        {children}
        </PhotoContext.Provider>

    )
}

export default PhotoContextProvider;