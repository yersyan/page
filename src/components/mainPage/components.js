import React from "react";

export const TitleBlock = ({direction, textAlign}) => {
    return <div className="titleBlock" style={{flexDirection: direction, textAlign}}>
        <h2 className="title">The Most Inspiring Images <br/>
            from our Authors</h2>
        <h4 className="intro">Thematic Galleries for Inspiration</h4>
    </div>
}

