import React from "react";
import Gallery from "react-photo-gallery";

export const PhotoGallery = ({gallery}) => {
    if(gallery.length > 12){
        gallery.length = 12
    }
    return <Gallery photos={gallery} margin={8}  targetRowHeight={(containerWidth) => 212} direcion={"row"} column={6}/>

}


