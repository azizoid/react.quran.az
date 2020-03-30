import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Context from "../context.js";

function Ayah() {
    const context = useContext(Context);

    const [data, setData] = React.useState([]);
    const [out, setOut] = React.useState([]);
    const [detail, setDetail] = React.useState([]);
    const [nav, setNav] = React.useState([]);

    let { soorah, ayah } = useParams();

    useEffect(() => {
        if (soorah > 0 && soorah < 115 && ayah > 0 && ayah < 287) {
            fetch("/api/" + soorah + "/" + ayah)
                .then(response => response.json())
                .then(v => {
                    setOut(v.out);
                    setData(v.data);
                    setDetail(v.detail);
                    setNav(v.nav);
                });
        }
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
                                        <a
                                            href={"/" + data.s}
                                            className="nav-link active"
                                        >
                                            {context.soorahList[data.s]}
                                        </a>
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
                        {out.s == 9 && out.a == 1 ? (
                            <tr>
                                <td colSpan="3">&nbsp;</td>
                            </tr>
                        ) : (
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <h2 className="text-center">
                                        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                                    </h2>
                                </td>
                                <td>&nbsp;</td>
                            </tr>
                        )}

                        {out.map(ayah => {
                            return (
                                <tr key={ayah.id}>
                                    <td>{ayah.a}</td>
                                    <td>
                                        <div className="ayaText">{ayah.c}</div>
                                    </td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td>&nbsp;</td>
                            <td style={{ fontSize: "1.25em" }}>
                                {detail.transliteration}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{ padding: "2em" }}>
                                <h2 className="text-right arabic">
                                    <article> {detail.content} </article>
                                </h2>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <span className="page-link">
                                            Digər ayələr
                                        </span>
                                    </li>
                                    {nav.prev != null ? (
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
                                    ) : (
                                        <li>&nbsp;</li>
                                    )}
                                    <li className="page-item disabled">
                                        <a href="#" className="page-link">
                                            {data.a}
                                        </a>
                                    </li>
                                    {nav.next != null ? (
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
                                    ) : (
                                        <li>&nbsp;</li>
                                    )}
                                </ul>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </Context.Provider>
    );
}

export default Ayah;
