import React from "react";
import {Gallery} from "./gallery";
import {AuthorImagesSection} from "./authorImagesSection";
import "../../css/authorImageSection.css"
import {SearchesSection} from "./searchesSection";
import {MostInspiringImages} from "./mostInspiringImages";
import {EarningSection} from "./earningSection";

export const MainPage = () => {
    const categoryArray = []

    return <main className="mainPage">
        <Gallery/>
        <AuthorImagesSection/>
        <SearchesSection categoryArray={categoryArray}/>
        <MostInspiringImages/>
        <EarningSection/>
    </main>
}