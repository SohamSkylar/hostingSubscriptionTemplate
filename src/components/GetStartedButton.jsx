import React from "react";
import './product.css';

const GetStartedButton = ({buttonName}) => {
    return (
        <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">{buttonName}</a>
        </div>
    );
}

export default GetStartedButton;