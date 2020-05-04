import React, { useEffect, useState } from "react";

import SoorahAyah from "./SoorahAyah";
import TranslatorList from "./TranslatorList";
import Loader from "./Loader";

import { TitleComponent } from "../TitleComponent";

const Soorah = ({ soorah, t, soorahTitle }) => {
    const [data, setData] = useState([]);
    const [out, setOut] = useState([]);
    const [empty, setEmpty] = useState(0);
    //empty - 0 start
    //empty - 1 returned empty
    //empty - 2 returned results

    useEffect(() => {
        fetch("/api/" + soorah + "?t=" + t)
            .then(response => response.json())
            .then(v => {
                if (v.out.length > 0) {
                    setEmpty(2);
                    setOut(v.out);
                    setData(v.data);
                } else setEmpty(1);
            });
    }, [soorah]);

    return (
        <>
            <TitleComponent
                title={soorahTitle + " - Quran.az: Öz Kitabını Oxu"}
            />
            <div className="row">
                {empty === 2 ? (
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
                                        <h3 className="text-center">
                                            بِسْمِ اللَّهِ الرَّحْمَٰنِ
                                            الرَّحِيمِ
                                        </h3>
                                    </td>
                                    <td>&nbsp;</td>
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
                            <Loader />
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Soorah;
