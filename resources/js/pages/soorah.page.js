import React, { useEffect, useState } from "react";

import SoorahAyah from "../components/soorah.ayah.component";
import TranslatorList from "../components/translator.list.component";
import Loader from "../components/loader.component";

import { TitleComponent } from "../components/title.component";

const Soorah = ({ soorah, t, soorahTitle }) => {
    const [data, setData] = useState([]);
    const [out, setOut] = useState([]);

    /*
    0 - start
    1 - not found
    2 - result 
    */
    const [empty, setEmpty] = useState(0);

    const [form, setForm] = useState({
        s: Number(soorah),
        t: Number(t)
    });

    useEffect(() => {
        const url = "/" + form.s + "?t=" + form.t;
        fetch("/api" + url)
            .then(response => response.json())
            .then(v => {
                if (v.out.length > 0) {
                    setEmpty(2);
                    setOut(v.out);
                    setData(v.data);
                } else setEmpty(1);
            });
    }, [form.s, form.t]);

    useEffect(() => {
        setForm(prev => {
            return {
                ...prev,
                s: Number(soorah),
                t: Number(t)
            };
        });
    }, []);

    if (empty < 2) {
        return (
            <div className="col-sm-12 text-center">
                {empty === 1 ? (
                    <div className="col-sm-12 alert alert-danger">
                        Surə tapılmamışdır
                    </div>
                ) : (
                    <Loader />
                )}
            </div>
        );
    }

    return (
        <>
            <TitleComponent
                title={soorahTitle + " - Quran.az: Öz Kitabını Oxu"}
            />
            <div className="row">
                <table
                    id="quran"
                    className="table table-striped table-borderless"
                >
                    <thead>
                        <tr>
                            <td colSpan="3">
                                <TranslatorList
                                    data={data}
                                    soorahTitle={soorahTitle}
                                />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.s != 9 && (
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <h3 className="text-center">&#65021;</h3>
                                </td>
                                <td>&nbsp;</td>
                            </tr>
                        )}
                        {out.map(ayah => {
                            return <SoorahAyah ayah={ayah} key={ayah.id} />;
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Soorah;
