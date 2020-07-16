import React from "react";
import {photos} from "./photos";
import authorImage from "../../images/author1.png";

export const AuthorBlock = () => {
    return <div className="authorBlock">
        <div className="imagesBlock">
            {
                photos.map((p, index) => {
                    return index < 4 && <div className="exampleImage">
                        <img src={p.src} alt="" className={`exImg${index+1}`}/>
                    </div>
                })
            }
            <div className="authorImage">
                <img src={authorImage} alt=""/>
            </div>
        </div>
        <h5 className="authorTitle">Roger Clark</h5>
        <span className="itemsQuantity">456 items</span>
    </div>
}