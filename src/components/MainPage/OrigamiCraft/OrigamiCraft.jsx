import React from "react";
import s from "./OrigamiCraft.module.css"
const OrigamiCraft = (props) => {
    return (
        <div className={s.item}>
            <img src={props.img} alt=""/>
            <div className={s.textus}>
                <h3>
                    <a href="#">{props.name}</a>
                </h3>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default OrigamiCraft