import React, {useState} from "react";
import {GalleryMenu} from "./galleryMenu";
import {Redirect, Route, Switch} from "react-router";
import "../../css/galery.css"
import {photos} from "./photos"
import {PhotoGallery} from "./photoGallery";

export const Gallery = () => {
    const categoryArray = [];
    const categoryItems = photos.map(p => {
        return p.category
    })
    categoryItems.map(c => {
        if (categoryArray.indexOf(c) < 0){
            categoryArray.push(c)
        }
    })

    const [category, setCategory] = useState(categoryArray[0])
    const gallery = [];

    photos.forEach((photo) => {
        if (photo.category === category) {
            gallery.push(photo)
        }
        return gallery
    })


    return <div className="gallery">
        <div className="galleryContainer">
            <GalleryMenu categoryArray={categoryArray} setCategory={setCategory}/>
            <Switch>
                <Route exact path="/" render={() => <Redirect to={`/page/${categoryArray[0]}`}/>}/>
                {categoryArray.map(c => {
                    return <Route path={`/page/${c}`} component={() => <PhotoGallery gallery={gallery}/>}/>
                })}
            </Switch>
        </div>
    </div>
}
