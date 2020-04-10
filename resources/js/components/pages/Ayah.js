import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Context from "../context.js";
import Translator from "./Translator";
import Transliteration from "./Transliteration";

import { TitleComponent } from "../TitleComponent";

const Ayah = ({ t }) => {
    const context = useContext(Context);

    const [data, setData] = React.useState([]);
    const [out, setOut] = React.useState([]);
    const [detail, setDetail] = React.useState([]);
    const [nav, setNav] = React.useState([]);

    const [empty, setEmpty] = React.useState(0);

    let { soorah, ayah } = useParams();

    useEffect(() => {
        soorah = parseInt(soorah);
        ayah = parseInt(ayah);

        fetch("/api/" + soorah + "/" + ayah + "?t=" + t)
            .then(response => response.json())
            .then(v => {
                if (v.out.length > 0) {
                    setOut(v.out);
                    setData(v.data);
                    setDetail(v.detail);
                    setNav(v.nav);

                    setEmpty(2);
                } else setEmpty(1);
            });

        return function cleanup() {
            setOut({});
            setData({});
        };
    }, [soorah, ayah]);

    return (
        <Context.Provider>
            <TitleComponent
                title={
                    context.soorahList[soorah] +
                    ":" +
                    ayah +
                    " - Quran.az: Öz Kitabını Oxu"
                }
            />
            <div className="row">
                {empty === 2 ? (
                    <table
                        id="quran-ayah"
                        className="table table-striped table-borderless"
                    >
                        <thead>
                            <tr>
                                <td>
                                    <ul className="nav nav-pills nav-fill">
                                        <li className="nav-item">
                                            <a
                                                href={"/" + data.s}
                                                className="nav-link active"
                                            >
                                                {context.soorahList[data.s]}
                                            </a>
                                        </li>
                                        {context.translatorList.map(
                                            (translator, index) => {
                                                return (
                                                    <Translator
                                                        translator={translator}
                                                        index={index}
                                                        soorah={data.s}
                                                        ayah={data.a}
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
                            <tr>
                                <td>
                                    <h2 className="text-center">
                                        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                                    </h2>
                                </td>
                            </tr>

                            {out.map(({ id, s, a, c }) => {
                                return (
                                    <tr key={id}>
                                        <td style={{ textAlign: "justify" }}>
                                            <strong>{s + ":" + a}</strong>
                                            <br />
                                            {c}
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td>
                                    <Transliteration
                                        content={detail.transliteration}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2 className="text-right arabic">
                                        <article> {detail.content} </article>
                                    </h2>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <span className="page-link">
                                                Digər ayələr
                                            </span>
                                        </li>
                                        {nav.prev != null && (
                                            <li className="page-item">
                                                <a
                                                    href={
                                                        "/" +
                                                        data.s +
                                                        "/" +
                                                        nav.prev
                                                    }
                                                    className="page-link"
                                                >
                                                    {nav.prev}
                                                </a>
                                            </li>
                                        )}
                                        <li className="page-item disabled">
                                            <a href="#" className="page-link">
                                                {data.a}
                                            </a>
                                        </li>
                                        {nav.next != null && (
                                            <li className="page-item">
                                                <a
                                                    href={
                                                        "/" +
                                                        data.s +
                                                        "/" +
                                                        nav.next
                                                    }
                                                    className="page-link"
                                                >
                                                    {nav.next}
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                ) : (
                    <div className="col-sm-12">
                        {empty === 1 ? (
                            <div className="col-sm-12 alert alert-danger">
                                Ayə tapılmamışdır
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
};

export default Ayah;
