import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Context from "../context.js";
import SoorahAyah from "./SoorahAyah";

function Soorah() {
    const context = useContext(Context);

    const [data, setData] = React.useState([]);
    const [out, setOut] = React.useState([]);

    let { soorah } = useParams();

    useEffect(() => {
        if (soorah > 0 && soorah < 115)
            fetch("/api/" + soorah)
                .then(response => response.json())
                .then(v => {
                    setOut(v.out);
                    setData(v.data);
                });
    }, []);

    return (
        <Context.Provider>
            <div className="row">
                <table
                    id="quran"
                    className="table table-striped table-borderless"
                >
                    <thead>
                        <tr>
                            <td colSpan="2">
                                <ul className="nav nav-pills nav-fill">
                                    <li className="nav-item">
                                        <span className="nav-link active">
                                            {context.soorahList[data.s]}
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            {context.translatorList[data.t]}
                                        </a>
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
        </Context.Provider>
    );
}

export default Soorah;
