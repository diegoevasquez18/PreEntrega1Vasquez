import React from "react";
import Sets from "./Sets.json"
import "./sets.css"
import Botones from "../ItemCount/Botones";

const Set = () => {
    
    return (
        <div className="containerSets" >{
        Sets.map((props)=>{
           return (
            <div className="cardSet" key={props.id}>
                <div className="card">
                    <img className="card-img-top" src={props.img} alt=".."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <h3>{props.price}</h3>
                        <div>
                            <Botones />
                        </div>
                        <button href="#" className="btn btn-primary">Comprar</button>
                    </div>
                    </div>
            </div>
           )
        })
    }</div>
    )
}
export default Set;