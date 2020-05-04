import React, { useState, useEffect } from "react";

const Form = ({ soorahList, translatorList, onSubmit }) => {
    const [form, setForm] = useState({
        s: 0,
        a: "",
        t: 1,
        q: "",
        view: "empty"
    });

    useEffect(() => {
        // console.log(formOld);
        // setForm(prev => {
        //     return { ...prev, ...formOld };
        // });
    }, []);

    const onSoorahChange = s => {
        setForm(prev => {
            return { ...prev, s: s, a: "", q: "", view: "soorah" };
        });
    };

    const onAyahChange = a => {
        setForm(prev => {
            return { ...prev, a: parseInt(a), view: "ayah" };
        });
    };

    const onTranslatorChange = t => {
        setForm(prev => {
            return { ...prev, t: parseInt(t) };
        });
    };

    const onQueryChange = query => {
        setForm(prev => {
            return { ...prev, q: query, s: 0, a: "", view: "search" };
        });
    };

    const onSearch = event => {
        event.preventDefault();
        // console.log(form);
        onSubmit(form);
    };

    return (
        <form
            id="search"
            className="card card-header row"
            acceptCharset="UTF-8"
            onSubmit={e => onSearch(e)}
        >
            <table className="table">
                <thead>
                    <tr>
                        <td className="form-group">
                            <select
                                className="form-control"
                                value={form.s}
                                onChange={e => onSoorahChange(e.target.value)}
                            >
                                <option value="0">Surələr</option>
                                {soorahList.map((soorah, index) => {
                                    return (
                                        <option value={index} key={index}>
                                            {soorah}
                                        </option>
                                    );
                                })}
                            </select>
                        </td>
                        <td className="form-group w-25">
                            <input
                                placeholder="Ayə"
                                className="form-control "
                                size="3"
                                maxLength="3"
                                min="1"
                                max="286"
                                type="number"
                                value={form.a}
                                onChange={e => onAyahChange(e.target.value)}
                            />
                        </td>
                        <td className="form-group">
                            <select
                                className="form-control"
                                id="t"
                                value={form.t}
                                onChange={e =>
                                    onTranslatorChange(e.target.value)
                                }
                            >
                                <option value="0">Tərcüməci</option>
                                {translatorList.map((t, index) => {
                                    return (
                                        <option value={index} key={index}>
                                            {t}
                                        </option>
                                    );
                                })}
                            </select>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <input
                                placeholder="Kəlmə"
                                className="form-control"
                                type="text"
                                value={form.q}
                                onChange={e => onQueryChange(e.target.value)}
                            />
                        </td>
                        <td>
                            <button
                                className="btn btn-success form-control"
                                type="submit"
                            >
                                Axtar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default Form;
