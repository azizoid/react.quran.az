import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Context from "../context.js";
import SearchAyah from "./SearchAyah";

import Pagination from "react-js-pagination";

function Search() {
    // const context = useContext(Context);

    const [data, setData] = React.useState([]);
    const [out, setOut] = React.useState([]);

    let { query } = useParams();

    useEffect(() => {
        if (query.length > 2)
            fetch("/api/search/" + query)
                .then(response => response.json())
                .then(v => {
                    setOut(v.out.data);
                    setData(v.out);
                    // setData(v.data);
                });
    }, []);

    const getData = v => {
        fetch("/api/search/" + query + "?page=" + v)
            .then(response => response.json())
            .then(v => {
                setOut(v.out.data);
                setData(v.out);
                // setData(v.data);
            });
    };

    return (
        <Context.Provider>
            <div className="row">
                <table
                    id="quran"
                    className="table table-striped table-borderless"
                >
                    <thead>
                        <tr>
                            <td colSpan="2">
                                <Pagination
                                    activePage={parseInt(data.current_page)}
                                    itemsCountPerPage={parseInt(data.per_page)}
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
                                    itemsCountPerPage={parseInt(data.per_page)}
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
            </div>
        </Context.Provider>
    );
}

export default Search;
