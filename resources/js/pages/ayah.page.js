import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import TranslatorList from "../components/translator.list.component";
import ColoredText from "../components/colored.text.component";

import Skeleton from "react-loading-skeleton";

import { TitleComponent } from "../components/title.component";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Ayah = ({ soorah, ayah, t, soorahTitle }) => {
    const [data, setData] = useState([]);
    const [out, setOut] = useState([]);
    const [detail, setDetail] = useState([]);
    const [nav, setNav] = useState([]);

    const [empty, setEmpty] = useState(0);

    const [form, setForm] = useState({
        s: Number(soorah),
        a: Number(ayah),
        t: Number(t)
    });

    useEffect(() => {
        const url = "/" + form.s + "/" + form.a + "?t=" + form.t;

        fetch("/api" + url)
            .then(response => response.json())
            .then(v => {
                if (v.out.length > 0) {
                    setOut(v.out);
                    setData(v.data);
                    setDetail(v.detail);
                    setNav(v.nav);

                    setEmpty(2);

                    localStorage.setItem("lastAyah", url);
                } else setEmpty(1);
            });
        // }, [soorah, ayah, t]);
    }, [form.s, form.a, form.t]);

    useEffect(() => {
        setForm(prev => {
            return {
                ...prev,
                s: Number(soorah),
                a: Number(ayah),
                t: Number(t)
            };
        });
    }, []);

    let history = useHistory();
    const navClick = (e, s, a, tr) => {
        setForm(prev => {
            return { ...prev, s: Number(s), a: Number(a), t: Number(tr) };
        });
        history.push("/" + s + "/" + a + "?t=" + tr);

        e.preventDefault();
    };

    let description = "";

    if (empty < 2)
        return (
            <div className="col-sm-12">
                {empty === 1 ? (
                    <div className="col-sm-12 alert alert-danger">
                        Ayə tapılmamışdır
                    </div>
                ) : (
                    <>
                        <h1>
                            <Skeleton height={2} />
                        </h1>
                        <Skeleton count={10} />
                    </>
                )}
            </div>
        );

    return (
        <>
            <div className="row">
                <table id="quran-ayah" className="table table-borderless">
                    <thead>
                        <tr>
                            <td colSpan="3">
                                <TranslatorList
                                    data={data}
                                    soorahTitle={soorahTitle}
                                    navClick={navClick}
                                />
                            </td>
                        </tr>
                    </thead>

                    <tbody>
                        {soorah !== 1 && ayah !== 1 && (
                            <tr>
                                <td colSpan="3">
                                    <h3 className="text-center">&#65021;</h3>
                                </td>
                            </tr>
                        )}

                        {out.map(({ id, s, a, c }) => {
                            return (
                                <tr key={id}>
                                    <td
                                        width="1"
                                        className="nav-icon align-middle"
                                    >
                                        {nav.prev != null && (
                                            <a
                                                onClick={e =>
                                                    navClick(
                                                        e,
                                                        data.s,
                                                        nav.prev,
                                                        t
                                                    )
                                                }
                                                href={
                                                    "/" +
                                                    data.s +
                                                    "/" +
                                                    nav.prev +
                                                    "?t=" +
                                                    t
                                                }
                                                style={{
                                                    fontSize: "3em",
                                                    color: "#6cb2eb"
                                                }}
                                            >
                                                <FaChevronLeft />
                                            </a>
                                        )}
                                    </td>
                                    <td style={{ textAlign: "justify" }}>
                                        <strong>{s + ":" + a}</strong>
                                        <br />
                                        {(description = c)}
                                    </td>
                                    <td
                                        width="1"
                                        className="nav-icon align-middle"
                                    >
                                        {nav.next != null && (
                                            <a
                                                onClick={e =>
                                                    navClick(
                                                        e,
                                                        data.s,
                                                        nav.next,
                                                        t
                                                    )
                                                }
                                                href={
                                                    "/" +
                                                    data.s +
                                                    "/" +
                                                    nav.next +
                                                    "?t=" +
                                                    t
                                                }
                                                style={{
                                                    fontSize: "3em",
                                                    color: "#6cb2eb"
                                                }}
                                            >
                                                <FaChevronRight />
                                            </a>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td></td>
                            <td>
                                <ColoredText
                                    key="transliteration"
                                    content={detail.transliteration}
                                />
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <h2 className="text-right arabic">
                                    {detail.content}
                                </h2>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <Link
                                            to={"/" + data.s + "?t=" + t}
                                            className="page-link"
                                        >
                                            Surəni tam oxu
                                        </Link>
                                    </li>
                                    {nav.prev != null && (
                                        <li className="page-item">
                                            <a
                                                onClick={e =>
                                                    navClick(
                                                        e,
                                                        data.s,
                                                        nav.prev,
                                                        t
                                                    )
                                                }
                                                href={
                                                    "/" +
                                                    data.s +
                                                    "/" +
                                                    nav.prev +
                                                    "?t=" +
                                                    t
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
                                                onClick={e =>
                                                    navClick(
                                                        e,
                                                        data.s,
                                                        nav.next,
                                                        t
                                                    )
                                                }
                                                href={
                                                    "/" +
                                                    data.s +
                                                    "/" +
                                                    nav.next +
                                                    "?t=" +
                                                    t
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
            </div>
            <TitleComponent
                title={
                    soorahTitle + ":" + ayah + " - Quran.az: Öz Kitabını Oxu"
                }
                description={description}
            />
        </>
    );
};

export default Ayah;
