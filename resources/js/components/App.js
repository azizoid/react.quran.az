import React, { useState, useEffect } from "react";
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
import Soorah from "./pages/Soorah";
import Ayah from "./pages/Ayah";
import Search from "./pages/Search";

import SOORAH_LIST from "./assets/soorahList.js";

const App = () => {
    let paramQuery = new URLSearchParams(useLocation().search);
    let t = paramQuery.get("t") || 1;
    if (!(t == 1 || t == 2 || t == 3 || t == 4)) t = 1;

    // const [form, setForm] = useState({ t: t });

    const soorahList = SOORAH_LIST;

    let history = useHistory();

    const onSearch = form => {
        if (form.s > 0 && form.s < 115) {
            form.view = "soorah";
            if (form.a > 0 && form.a < 287) {
                form.view = "ayah";
            }
        } else if (form.q.length > 3) {
            form.view = "search";
        } else form.view = "empty";

        if (!(form.t == 1 || form.t == 2 || form.t == 3 || form.t == 4))
            form.t = 1;
        // setForm(form);

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

    const translator = () => {
        let t = paramQuery.get("t") || 1;
        if (!(t == 1 || t == 2 || t == 3 || t == 4)) t = 1;
        return t;
    };

    return (
        <Switch>
            <Route
                exact={true}
                path="/"
                render={() => (
                    <>
                        <Form onSubmit={onSearch} />
                        <br />
                        <Empty />
                    </>
                )}
            />
            <Route
                path="/search/:query"
                render={q => {
                    const formData = {
                        q: q.match.params.query,
                        t: translator()
                    };
                    return (
                        <>
                            <Form onSubmit={onSearch} formData={formData} />
                            <br />
                            <Search query={formData.q} t={formData.t} />
                        </>
                    );
                }}
            />
            <Route
                exact={true}
                strict={false}
                path="/:soorah([1-9]|[1-8][0-9]|9[0-9]|10[0-9]|11[0-4])"
                render={q => {
                    const formData = {
                        s: q.match.params.soorah,
                        t: translator()
                    };
                    return (
                        <>
                            <Form onSubmit={onSearch} formData={formData} />
                            <br />
                            <Soorah
                                soorahTitle={soorahList[formData.s]}
                                soorah={formData.s}
                                t={formData.t}
                            />
                        </>
                    );
                }}
                key={Math.random()}
            ></Route>
            <Route
                exact={false}
                strict={false}
                path="/:soorah([1-9]|[1-8][0-9]|9[0-9]|10[0-9]|11[0-4])/:ayah([1-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-7][0-9]|28[0-6])"
                render={q => {
                    const formData = {
                        s: q.match.params.soorah,
                        a: q.match.params.ayah,
                        t: translator()
                    };
                    return (
                        <>
                            <Form onSubmit={onSearch} formData={formData} />
                            <br />
                            <Ayah
                                soorahTitle={soorahList[formData.s]}
                                soorah={formData.s}
                                ayah={formData.a}
                                t={formData.t}
                            />
                        </>
                    );
                }}
                key={Math.random()}
            />
            <Route
                path="*"
                render={() => (
                    <>
                        <Form onSubmit={onSearch} />
                        <br />
                        <Empty alert="danger" />
                    </>
                )}
                status={404}
            />
        </Switch>
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
