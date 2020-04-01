import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Context from "../context.js";
import SearchAyah from "./SearchAyah";

import Pagination from "react-js-pagination";

function Search({ t }) {
    // const context = useContext(Context);

    const [data, setData] = React.useState([]);
    const [out, setOut] = React.useState([]);

    const [empty, setEmpty] = React.useState(0);

    let { query } = useParams();

    useEffect(() => {
        if (query.length > 2) {
            fetch("/api/search/" + query + "?t=" + t)
                .then(response => response.json())
                .then(v => {
                    if (v.out.data.length > 0) {
                        setOut(v.out.data);
                        setData(v.out);
                        setEmpty(2);
                    } else setEmpty(1);
                });
        }
    }, []);

    const getData = v => {
        fetch("/api/search/" + query + "?page=" + v + "&t=" + t)
            .then(response => response.json())
            .then(v => {
                setOut(v.out.data);
                setData(v.out);
                if (v.out.data.length > 0) setEmpty(2);
                else setEmpty(1);
            });
    };

    return (
        <Context.Provider>
            <div className="row">
                {empty === 2 ? (
                    <table
                        id="quran"
                        className="table table-striped table-borderless"
                    >
                        <thead>
                            <tr>
                                <td colSpan="2">
                                    <Pagination
                                        activePage={parseInt(data.current_page)}
                                        itemsCountPerPage={parseInt(
                                            data.per_page
                                        )}
                                        totalItemsCount={parseInt(data.total)}
                                        pageRangeDisplayed={5}
                                        innerClass="pagination justify-content-center"
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        onChange={getData.bind(this)}
                                    />
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {out.map(ayah => {
                                return <SearchAyah ayah={ayah} key={ayah.id} />;
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2">
                                    <Pagination
                                        activePage={parseInt(data.current_page)}
                                        itemsCountPerPage={parseInt(
                                            data.per_page
                                        )}
                                        totalItemsCount={parseInt(data.total)}
                                        pageRangeDisplayed={5}
                                        innerClass="pagination justify-content-center"
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        onChange={getData.bind(this)}
                                    />
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                ) : (
                    <div className="col-sm-12">
                        {empty === 1 ? (
                            <div className="col-sm-12 alert alert-danger">
                                Kəlmə tapılmamışdır
                            </div>
                        ) : (
                            <div className="text-center">
                                <div className="lds-grid">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Context.Provider>
    );
}

export default Search;
