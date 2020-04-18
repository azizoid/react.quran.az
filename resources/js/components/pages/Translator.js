import React from "react";

const Translators = ({ soorah, title, ayah, index }) => {
    return (
        <a
            className="dropdown-item"
            href={"/" + soorah + (ayah ? "/" + ayah : "") + "?t=" + index}
        >
            {title}
        </a>
    );
};

export default Translators;
