import React from "react";

function SoorahAyah({ ayah }) {
    return (
        <tr id={ayah.a}>
            <td className="text-right">{ayah.a}</td>
            <td>{ayah.c} </td>
            <td>&nbsp;</td>
        </tr>
    );
}

export default SoorahAyah;
