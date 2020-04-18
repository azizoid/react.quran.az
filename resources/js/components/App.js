import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useLocation
} from "react-router-dom";

import Form from "./Form";

import Empty from "./pages/Empty";
import NotFound from "./pages/NotFound";
import Soorah from "./pages/Soorah";
import Ayah from "./pages/Ayah";
import Search from "./pages/Search";

const App = () => {
    // let t = parseInt(new URLSearchParams(window.location.search).get("t"));
    let paramQuery = new URLSearchParams(useLocation().search);
    let t = paramQuery.get("t");
    if (!(t == 1 || t == 2 || t == 3)) t = 1;

    const [form, setForm] = useState({ t: t });

    const translatorList = [
        ,
        "Əlixan Musayev",
        "Bünyadov-Məmmədəliyev",
        "Эльмир Кулиев"
    ];
    const soorahList = [
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
    ];

    let history = useHistory();

    const onSearch = form => {
        if (form.s > 0 && form.s < 115) {
            form.view = "soorah";
            if (form.a > 0 && form.a < 286) {
                form.view = "ayah";
            }
        } else if (form.q.length > 3) {
            form.view = "search";
        } else form.view = "empty";
        if (!(form.t === 1 || form.t === 2 || form.t === 3)) form.t = 1;
        setForm(form);

        switch (form.view) {
            case "search":
                history.push("/search/" + form.q + "?t=" + form.t);
                break;
            case "soorah":
                history.push("/" + form.s + "?t=" + form.t);
                break;
            case "ayah":
                history.push("/" + form.s + "/" + form.a + "?t=" + form.t);
                break;
            case "empty":
                history.push("/");
                break;
        }
    };

    return (
        <>
            <Form
                soorahList={soorahList}
                translatorList={translatorList}
                onSubmit={onSearch}
                formOld={form}
            />

            <br />

            <Switch>
                <Route exact={true} path="/" component={() => <Empty />} />
                <Route
                    path="/search/:query"
                    component={q => (
                        <Search query={q.match.params.query} t={form.t} />
                    )}
                />
                <Route
                    exact={true}
                    path="/:soorah([1-9]|[1-8][0-9]|9[0-9]|10[0-9]|11[0-4])"
                    component={q => (
                        <Soorah
                            soorahTitle={soorahList[q.match.params.soorah]}
                            translatorList={translatorList}
                            soorah={q.match.params.soorah}
                            t={form.t}
                        />
                    )}
                ></Route>
                <Route
                    exact={true}
                    path="/:soorah([1-9]|[1-8][0-9]|9[0-9]|10[0-9]|11[0-4])/:ayah([1-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-7][0-9]|28[0-6])"
                    render={q => (
                        <Ayah
                            soorahTitle={soorahList[q.match.params.soorah]}
                            translatorList={translatorList}
                            soorah={q.match.params.soorah}
                            ayah={q.match.params.ayah}
                            t={form.t}
                        />
                    )}
                />
                <Route path="*" component={NotFound} status={404} />
            </Switch>
        </>
    );
};

export default App;

if (document.getElementById("index")) {
    ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById("index")
    );
}
