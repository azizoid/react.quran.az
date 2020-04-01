import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Context from "../context.js";
import SoorahAyah from "./SoorahAyah";
import Translator from "./Translator";

function Soorah({ t }) {
    const context = useContext(Context);

    const [data, setData] = React.useState([]);
    const [out, setOut] = React.useState([]);
    const [empty, setEmpty] = React.useState(0);
    //empty - 0 start
    //empty - 1 returned empty
    //empty - 2 returned results

    let { soorah } = useParams();

    useEffect(() => {
        console.log(t);
        // soorah = parseInt(soorah);

        // if (soorah > 0 && soorah < 115)
        {
            fetch("/api/" + soorah + "?t=" + t)
                .then(response => response.json())
                .then(v => {
                    if (v.out.length > 0) {
                        setEmpty(2);
                        setOut(v.out);
                        setData(v.data);
                    } else setEmpty(1);
                });
        } // else setEmpty(1);
    }, []);

    return (
        <Context.Provider>
            <div className="row">
                {empty === 2 ? (
                    <table
                        id="quran"
                        className="table table-striped table-borderless"
                    >
                        <thead>
                            <tr>
                                <td colSpan="3">
                                    <ul className="nav nav-pills nav-fill">
                                        <li className="nav-item">
                                            <span className="nav-link active">
                                                {context.soorahList[data.s]}
                                            </span>
                                        </li>
                                        {context.translatorList.map(
                                            (translator, index) => {
                                                return (
                                                    <Translator
                                                        translator={translator}
                                                        index={index}
                                                        soorah={data.s}
                                                        key={index}
                                                    />
                                                );
                                            }
                                        )}
                                    </ul>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.s != 9 ? (
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>
                                        <h2 className="text-center">
                                            بِسْمِ اللَّهِ الرَّحْمَٰنِ
                                            الرَّحِيمِ
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
                ) : (
                    <div className="col-sm-12">
                        {empty === 1 ? (
                            <div className="col-sm-12 alert alert-danger">
                                Surə tapılmamışdır
                            </div>
                        ) : (
                            <div className="text-center">
                                <div className="lds-grid">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Context.Provider>
    );
}

export default Soorah;
