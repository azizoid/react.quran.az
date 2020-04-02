import React, { useEffect, useState, useContext } from "react";
import Context from "./context.js";

const RandomAyah = () => {
    const context = useContext(Context);
    const [out, setOut] = useState([]);

    useEffect(() => {
        fetch("/api/random?t=1")
            .then(response => response.json())
            .then(data => {
                setOut(data.out);
            });
    }, []);

    return (
        <Context.Provider>
            <div className="card">
                <div className="card-header">BİR AYƏ</div>
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
