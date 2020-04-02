import React, { useContext } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from "react-router-dom";

import Context from "./context";
import Form from "./Form";

import Empty from "./pages/Empty";
import Soorah from "./pages/Soorah";
import Ayah from "./pages/Ayah";
import Search from "./pages/Search";

const App = () => {
    let t = parseInt(new URLSearchParams(window.location.search).get("t"));
    if (!(t == 1 || t == 2 || t == 3)) t = 1;

    const context = useContext(Context);
    const [form, setForm] = React.useState({ t: t });

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
        <Context.Provider
            value={{
                loader: context.loader,
                soorahList: context.soorahList,
                translatorList: context.translatorList,
                onSearch
            }}
        >
            <div className="container">
                <Form
                    soorahList={context.soorahList}
                    translatorList={context.translatorList}
                    onSearch={onSearch}
                    form={form}
                />

                <hr />

                <Switch>
                    <Route exact={true} path="/" component={() => <Empty />} />
                    <Route
                        path="/search/:query"
                        component={() => <Search t={form.t} />}
                    />
                    <Route
                        exact={true}
                        path="/:soorah([1-9]|[1-8][0-9]|9[0-9]|10[0-9]|11[0-4])"
                        component={() => <Soorah soorah="soorah" t={form.t} />}
                    ></Route>
                    <Route
                        exact={true}
                        path="/:soorah([1-9]|[1-8][0-9]|9[0-9]|10[0-9]|11[0-4])/:ayah([1-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-7][0-9]|28[0-6])"
                        component={() => <Ayah t={form.t} />}
                    />
                    <Empty />
                </Switch>
            </div>
        </Context.Provider>
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
