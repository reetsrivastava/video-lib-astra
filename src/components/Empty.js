import React from "react";
import { Link } from "react-router-dom";

export function Emtpy({itemName}) {
    return (
        <div style={{textAlign:"center"}}>
            <h1>Your {itemName} is Empty...</h1>
            <Link to="/" >
                <button className="btn-bg-white" style={{padding:"1rem 0.rem"}}>Go to Home</button>
            </Link>
        </div>
    )
}