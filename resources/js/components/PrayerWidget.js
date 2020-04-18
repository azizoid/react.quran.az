import React, { useState, useEffect } from "react";
import { getDayOfYear } from "date-fns";

const PrayerWidget = () => {
    const [prayers, setPrayers] = useState([
        { id: 1, title: "Fəcr namazı", time: "--:--" },
        { id: 2, title: "Günəş", time: "--:--" },
        { id: 3, title: "Zöhr namazı", time: "--:--" },
        { id: 4, title: "Əsr namazı", time: "--:--" },
        { id: 5, title: "Məğrib namazı", time: "--:--" },
        { id: 6, title: "İşa namazı", time: "--:--" }
    ]);
    // const [tarix, setTarix] = useState();
    const [hijri, setHijri] = useState();
    const dd = getDayOfYear(new Date());

    useEffect(() => {
        fetch("https://nam.az/api/1/" + dd)
            .then(response => response.json())
            .then(data => {
                const out = prayers.map((prayer, i) => {
                    prayer["time"] = data["prayers"][i];
                    return prayer;
                });
                setHijri(data.hijri);
                setPrayers(out);
            })
            .catch();
    }, [dd]);

    return (
        <table className="table table-borderless table-sm">
            <thead className="table-dark">
                <tr>
                    <td align="center" colSpan="2">
                        {hijri}
                    </td>
                    <td align="center">Bakı</td>
                    <td align="center">
                        <a
                            href="https://nam.az"
                            target="_blank"
                            className="badge badge-danger"
                            style={{ padding: "0.4em", fontSize: "1.rem" }}
                        >
                            Digər şəhərlər
                        </a>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="right">{prayers[0]["title"]}</td>
                    <td>{prayers[0]["time"]}</td>
                    <td align="right">{prayers[1]["title"]}</td>
                    <td>{prayers[1]["time"]}</td>
                </tr>
                <tr>
                    <td align="right">{prayers[2]["title"]}</td>
                    <td>{prayers[2]["time"]}</td>
                    <td align="right">{prayers[3]["title"]}</td>
                    <td>{prayers[3]["time"]}</td>
                </tr>
                <tr>
                    <td align="right">{prayers[4]["title"]}</td>
                    <td>{prayers[4]["time"]}</td>
                    <td align="right">{prayers[5]["title"]}</td>
                    <td>{prayers[5]["time"]}</td>
                </tr>
            </tbody>
        </table>
    );
};
export default PrayerWidget;
