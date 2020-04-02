import React, { useState } from "react";

class PrayerWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prayers: [
                { id: 1, title: "Fəcr namazı", time: "--:--" },
                { id: 2, title: "Günəş", time: "--:--" },
                { id: 3, title: "Zöhr namazı", time: "--:--" },
                { id: 4, title: "Əsr namazı", time: "--:--" },
                { id: 5, title: "Məğrib namazı", time: "--:--" },
                { id: 6, title: "İşa namazı", time: "--:--" }
            ]
        };
    }

    componentDidMount() {
        fetch("https://nam.az/api/0")
            .then(response => response.json())
            .then(data => {
                const out = {};
                out.prayers = [...this.state.prayers];

                for (let i = 0; i < 6; i++) {
                    out.prayers[i]["time"] = data.prayers[i];
                }
                this.setState(out);
            });
    }

    render() {
        return (
            <table className="table table-borderless table-sm">
                <thead className="table-dark">
                    <tr>
                        <td align="center" colSpan="3">
                            Bakı, Azərbaycan
                        </td>
                        <td align="left">
                            <a
                                href="https://nam.az"
                                className="badge badge-danger"
                            >
                                NAM.az
                            </a>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="right">{this.state.prayers[0]["title"]}</td>
                        <td>{this.state.prayers[0]["time"]}</td>
                        <td align="right">{this.state.prayers[1]["title"]}</td>
                        <td>{this.state.prayers[1]["time"]}</td>
                    </tr>
                    <tr>
                        <td align="right">{this.state.prayers[2]["title"]}</td>
                        <td>{this.state.prayers[2]["time"]}</td>
                        <td align="right">{this.state.prayers[3]["title"]}</td>
                        <td>{this.state.prayers[3]["time"]}</td>
                    </tr>
                    <tr>
                        <td align="right">{this.state.prayers[4]["title"]}</td>
                        <td>{this.state.prayers[4]["time"]}</td>
                        <td align="right">{this.state.prayers[5]["title"]}</td>
                        <td>{this.state.prayers[5]["time"]}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default PrayerWidget;
