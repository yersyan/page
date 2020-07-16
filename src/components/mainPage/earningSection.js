import React from "react";
import cn from "classnames"

export const EarningSection = () => {
    return <section className="earningSection">
        <h2 className={cn("earningTitle")}>New Stock For Your Earning</h2>
        <h4 className={cn("earningIntro")}>Thematic Galleries for Inspiration</h4>
        <button className="earningBtn">start uploading</button>
    </section>
}