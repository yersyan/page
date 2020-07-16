import React from "react";
import {Intro, Title, TitleBlock} from "./components";

export const TextSection = () => {
    return <section className="textSection">
        <div className="container">
            <TitleBlock textAlign={'left'}/>
            <div className="textSide">
                <p className="authorText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam
                    lectus.
                    Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet
                    eget
                    eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat fringilla sodales vel a
                    nulla. Cras sit amet tempus risus. Fusce dignissim blandit justo, eget elementum risus tristique a.
                    Nunc
                    fringilla lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem. Phasellus
                    a
                    auctor lacus. Proin vitae accumsan nunc.
                </p>
            </div>
        </div>
    </section>
}