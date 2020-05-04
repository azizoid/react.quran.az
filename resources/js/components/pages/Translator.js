import React from "react";
import { Link } from "react-router-dom";

const Translators = ({ url, title }) => {
    return (
        <Link className="dropdown-item" to={url}>
            {title}
        </Link>
    );
};

export default Translators;
