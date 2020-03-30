import React, { useContext, useEffect } from "react";
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

function App() {
    const context = useContext(Context);
    let history = useHistory();

    useEffect(() => {
        //
    });

    function onSearch(form) {
        console.log(form.view);
        switch (form.view) {
            case "search":
                history.push("/search/" + form.q);
                break;
            case "soorah":
                history.push("/" + form.s);
                break;
            case "ayah":
                history.push("/" + form.s + "/" + form.a);
                break;
        }
    }

    return (
        <Context.Provider
            value={{
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
                />

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Empty />
                    </Route>
                    <Route path="/search/:query">
                        <Search />
                    </Route>
                    <Route path="/:soorah/:ayah">
                        <Ayah />
                    </Route>
                    <Route path="/:soorah">
                        <Soorah />
                    </Route>
                </Switch>
            </div>
        </Context.Provider>
    );
}

export default App;

if (document.getElementById("index")) {
    ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById("index")
    );
}
