import React from "react";
import { Link } from "react-router-dom";

const Translators = ({ url, title }) => {
    return (
        <Link to={url} className="dropdown-item">
            {title}
        </Link>
    );
};

export default Translators;
