import React from "react";
import {AuthorsBlock} from "./authorsBlock";
import {TextSection} from "./textSection";
import {TitleBlock} from "./components";
import {TextImageSection} from "./textImageSection";

export const AuthorImagesSection = () => {
    return <section className="authorImagesSection">
        <TitleBlock direction={'column-reverse'}/>
        <AuthorsBlock/>
        <TextSection/>
        <TextImageSection color={'#F7F7F7'}/>
        <TextImageSection direction={"row-reverse"}/>
    </section>
}