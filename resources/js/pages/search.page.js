import React, { useEffect, useState } from "react";
import SearchAyah from "../components/search.ayah.component";
import Loader from "../components/loader.component";

import Pagination from "react-js-pagination";

import { TitleComponent } from "../components/title.component";

const Search = ({ query, t }) => {
    const [data, setData] = useState([]);
    const [out, setOut] = useState([]);

    /*
    0 - start
    1 - not found
    2 - result 
    */
    const [empty, setEmpty] = useState(0);

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
    }, [query, t]);

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

    if (empty < 2) {
        return (
            <div className="col-sm-12 text-center">
                {empty === 1 ? (
                    <div className="col-sm-12 alert alert-danger">
                        Kəlmə tapılmamışdır
                    </div>
                ) : (
                    <Loader />
                )}
            </div>
        );
    }

    return (
        <>
            <TitleComponent title={query + " - Quran.az: Öz Kitabını Oxü"} />
            <div className="row">
                <table
                    id="quran"
                    className="table table-striped table-borderless"
                >
                    <thead>
                        <tr>
                            <td colSpan="3">
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
                            return (
                                <SearchAyah
                                    ayah={ayah}
                                    key={ayah.id}
                                    mark={query}
                                />
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">
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
        </>
    );
};

export default Search;
