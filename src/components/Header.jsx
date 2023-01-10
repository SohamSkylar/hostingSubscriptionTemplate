import React from "react";
import './product.css';

const Header = ({headingTag}) => {
    return (
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                {headingTag}
            </h2>
        </div>
    );
}

export default Header;