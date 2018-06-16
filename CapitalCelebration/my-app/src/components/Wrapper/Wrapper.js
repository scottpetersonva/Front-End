import React from "react";
import "./Wrapper.css";

const Wrapper = props =>

    <div className="row">
        {props.children}
    </div>

export default Wrapper;
