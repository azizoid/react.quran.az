import React from "react";

function Translators({ soorah, translator, ayah, index }) {
    return (
        <li className="nav-item">
            <a
                href={"/" + soorah + (ayah ? "/" + ayah : "") + "?t=" + index}
                className="nav-link"
            >
                {translator}
            </a>
        </li>
    );
}

export default Translators;
