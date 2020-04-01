import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function SearchAyah({ ayah }) {
    return (
        <tr id={ayah.a}>
            <td className="text-right">{ayah.a}</td>
            <td>{ayah.c} </td>
            <td>
                <a href={"/" + ayah.s + "/" + ayah.a + "?t=" + ayah.t}>
                    <FaExternalLinkAlt />
                </a>
            </td>
        </tr>
    );
}

export default SearchAyah;
