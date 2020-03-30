import React from "react";

function SearchAyah({ ayah }) {
    return (
        <tr id={ayah.a}>
            <td className="text-right">
                <a href={"/" + ayah.s + "/" + ayah.a}>{ayah.a}</a>
            </td>
            <td>{ayah.c} </td>
            <td>&nbsp;</td>
        </tr>
    );
}

export default SearchAyah;
