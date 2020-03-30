import React from "react";
import SoorahAyah from "../SoorahAyah";

function Soorah({ out, data, title, translator }) {
    return (
        <div className="row">
            <h1>Ayah</h1>
            <table id="quran" className="table table-striped table-borderless">
                <thead>
                    <tr>
                        <td colSpan="2">
                            <ul className="nav nav-pills nav-fill">
                                <li className="nav-item">
                                    <span className="nav-link active">
                                        {title}
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">{translator}</a>
                                </li>
                            </ul>
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                </thead>
                <tbody>
                    {data.s != 9 ? (
                        <tr>
                            <td>&nbsp;</td>
                            <td>
                                <h2 className="text-center">
                                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                                </h2>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                    ) : (
                        <tr>
                            <td colSpan="3">&nbsp;</td>
                        </tr>
                    )}
                    {out.map(ayah => {
                        return <SoorahAyah ayah={ayah} key={ayah.id} />;
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Soorah;
