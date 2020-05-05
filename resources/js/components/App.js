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

import SOORAH_LIST from "./assets/soorahList.js";

import LogRocket from "logrocket";
LogRocket.init("hbjlsq/quranaz");

const App = () => {
    let paramQuery = new URLSearchParams(useLocation().search);
    let t = paramQuery.get("t");
    if (!(t == 1 || t == 2 || t == 3)) t = 1;

    const [form, setForm] = useState({ t: t });

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
            <Form onSubmit={onSearch} formOld={form} />

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
                            soorah={q.match.params.soorah}
                            t={form.t}
                        />
                    )}
                ></Route>
                <Route
                    exact={true}
                    strict={false}
                    path="/:soorah([1-9]|[1-8][0-9]|9[0-9]|10[0-9]|11[0-4])/:ayah([1-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-7][0-9]|28[0-6])"
                    component={q => (
                        <Ayah
                            soorahTitle={soorahList[q.match.params.soorah]}
                            soorah={q.match.params.soorah}
                            ayah={q.match.params.ayah}
                            t={form.t}
                        />
                    )}
                    key={Math.random()}
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
