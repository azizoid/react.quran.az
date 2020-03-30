import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "../Form";

import Soorah from "./Soorah";
import Empty from "./Empty";

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                s: "",
                a: "",
                q: "",
                t: 1,
                view: "empty"
            },
            out: [],
            nav: [],
            detail: [],
            translatorList: [
                ,
                "Əlixan Musayev",
                "Эльмир Кулиев",
                "Bünyadov-Məmmədəliyev"
            ],
            soorahList: [
                ,
                "Fatihə. 1",
                "Bəqərə. 2",
                "Ali İmran. 3",
                "Nisa. 4",
                "Maidə. 5",
                "Ənam. 6",
                "Əraf. 7",
                "Ənfal. 8",
                "Tovbə. 9",
                "Yunus. 10",
                "Hud. 11",
                "Yusuf. 12",
                "Rad. 13",
                "İbrahim. 14",
                "Hicr. 15",
                "Nəhl. 16",
                "İsra. 17",
                "Kəhf. 18",
                "Məryəm. 19",
                "Ta ha. 20",
                "Ənbiya. 21",
                "Həcc. 22",
                "Muminun. 23",
                "Nur. 24",
                "Furqan. 25",
                "Şuəra. 26",
                "Nəml. 27",
                "Qasas. 28",
                "Ənkəbut. 29",
                "Rum. 30",
                "Loğman. 31",
                "Səcdə. 32",
                "Əhzab. 33",
                "Səba. 34",
                "Fatir. 35",
                "Ya sin. 36",
                "Saffat. 37",
                "Sad. 38",
                "Zumər. 39",
                "Ğafir. 40",
                "Fussilət. 41",
                "Şura. 42",
                "Zuxruf. 43",
                "Duxan. 44",
                "Casiyə. 45",
                "Əhqaf. 46",
                "Muhəmməd. 47",
                "Fəth. 48",
                "Hucurat. 49",
                "Qaf. 50",
                "Zəriyət. 51",
                "Tur. 52",
                "Nəcm. 53",
                "Qamər. 54",
                "Rahmən. 55",
                "Vaqiə. 56",
                "Hədid. 57",
                "Mucadilə. 58",
                "Həşr. 59",
                "Mumtəhənə. 60",
                "Saff. 61",
                "Cumuə. 62",
                "Munafiqun. 63",
                "Təğabun. 64",
                "Talaq. 65",
                "Təhrim. 66",
                "Mulk. 67",
                "Qaləm. 68",
                "Haqqə. 69",
                "Məaric. 70",
                "Nuh. 71",
                "Cinn. 72",
                "Muzzəmmil. 73",
                "Muddəssir. 74",
                "Qiyamə. 75",
                "İnsan. 76",
                "Mursəlat. 77",
                "Nəbə. 78",
                "Naziat. 79",
                "Əbəsə. 80",
                "Təkvir. 81",
                "İnfitar. 82",
                "Mutaffifin. 83",
                "İnşiqaq. 84",
                "Buruc. 85",
                "Tariq. 86",
                "Əla. 87",
                "Ğaşiyə. 88",
                "Fəcr. 89",
                "Bələd. 90",
                "Şəms. 91",
                "Leyl. 92",
                "Duha. 93",
                "Şərh. 94",
                "Tin. 95",
                "Ələq. 96",
                "Qədr. 97",
                "Beyyinə. 98",
                "Zəlzələ. 99",
                "Adiyat. 100",
                "Qariə. 101",
                "Təkasur. 102",
                "Əsr. 103",
                "Huməzə. 104",
                "Fil. 105",
                "Qureyş. 106",
                "Maun. 107",
                "Kovsər. 108",
                "Kafirun. 109",
                "Nəsr. 110",
                "Məsəd. 111",
                "İxlas. 112",
                "Fələq. 113",
                "Nas. 114"
            ]
        };
    }

    componentDidMount() {
        // this.onSearch();
    }

    onSearch = form => {
        console.log(form);
        let url = "/api";

        if (form.view === "query") {
            url += "/search/" + form.q;
        } else {
            if (form.s > 0 && form.s < 115) {
                url += "/" + form.s;

                if (form.a > 0 && form.a < 287) {
                    url += "/" + form.a;
                }
            }
        }
        url += "?trans=" + form.t;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data.data, out: data.out });
                console.log(this.state);
            });
    };

    render() {
        return (
            <div className="container">
                <Form
                    soorahList={this.state.soorahList}
                    translatorList={this.state.translatorList}
                    onSearch={this.onSearch}
                />

                <hr />

                {this.state.out.length > 0 ? (
                    <Soorah
                        out={this.state.out}
                        data={this.state.data}
                        title={this.state.soorahList[this.state.data.s]}
                        translator={
                            this.state.translatorList[this.state.data.t]
                        }
                    />
                ) : (
                    <Empty />
                )}
            </div>
        );
    }
}

export default App;

if (document.getElementById("index")) {
    ReactDOM.render(<App />, document.getElementById("index"));
}
