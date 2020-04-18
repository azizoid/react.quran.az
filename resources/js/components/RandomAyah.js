import React, { useEffect, useState, useContext } from "react";
import Context from "./context.js";

const RandomAyah = () => {
    const context = useContext(Context);
    const [out, setOut] = useState([]);
    const [lastUrl, setLastUrl] = useState();

    useEffect(() => {
        fetch("/api/random?t=1")
            .then(response => response.json())
            .then(data => {
                setOut(data.out);
            });
        setLastUrl(localStorage.getItem("lastAyah"));
    }, []);

    return (
        <Context.Provider>
            <div className="card ">
                <div className="card-header">
                    <ul className="nav nav-pills nav-fill card-header-pills">
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">
                                BİR AYƏ
                            </a>
                        </li>
                        <li className="nav-item">
                            {lastUrl ? (
                                <a className="nav-link" href={lastUrl}>
                                    Son oxuduğunuz ayə
                                </a>
                            ) : (
                                <span className="nav-link disabled">
                                    Son oxuduğunuz ayə
                                </span>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h6 className="card-title text-muted">
                        {context.soorahList[out.s] + ", " + out.a}
                    </h6>
                    <h6 className="card-title">
                        <a href={"/" + out.s + "/" + out.a + "?t=" + out.t}>
                            {out.c}
                        </a>
                    </h6>
                </div>
            </div>
        </Context.Provider>
    );
};
export default RandomAyah;
