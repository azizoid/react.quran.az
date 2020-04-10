import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Highlighter from "react-highlight-words";

const SearchAyah = ({ ayah, mark }) => {
    return (
        <tr>
            <td className="text-right">{ayah.s + ":" + ayah.a}</td>
            <td>
                <Highlighter
                    searchWords={[mark]}
                    textToHighlight={ayah.c}
                    autoEscape={true}
                />
            </td>
            <td>
                <a href={"/" + ayah.s + "/" + ayah.a + "?t=" + ayah.t}>
                    <FaExternalLinkAlt />
                </a>
            </td>
        </tr>
    );
};

export default SearchAyah;
