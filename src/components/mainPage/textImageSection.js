import React from "react";
import sectionImage from "../../images/sectionImage.png"
import {TitleBlock} from "./components";
import cn from "classnames"
import {AiOutlineArrowRight} from "react-icons/all";

export const TextImageSection = ({direction, color}) => {
    return <section className="textImageSection" style={{backgroundColor: color}}>
        <div className="container" style={{flexDirection: direction}}>
            <div className="sectionImage">
                <img src={sectionImage} alt=""/>
            </div>
            <div className="textSide">
                <TitleBlock textAlign={'left'}/>
                <p className={cn("authorText sectionText")}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus.
                    Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget
                    eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat fringilla sodales vel a
                    nulla. Cras sit amet tempus risus. Fusce dignissim blandit justo, eget elementum risus tristique a. Nunc
                    fringilla lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem. Phasellus a
                    auctor lacus. Proin vitae accumsan nunc.
                </p>
                <a href="/#" className="learnMoreBtn">
                    <span>Learn More</span>
                    <AiOutlineArrowRight className="learnMoreBtnIcon"/>
                </a>
            </div>
        </div>
    </section>
}