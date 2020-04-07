import React, { useState } from "react";

const Form = ({ soorahList, translatorList, onSubmit }) => {
    const [form, setForm] = useState({
        s: 0,
        a: "",
        t: 1,
        q: "",
        view: "empty",
    });

    const onSoorahChange = (s) => {
        setForm({ ...form, s: s, q: "", view: "soorah" });
    };

    const onAyahChange = (a) => {
        setForm({ ...form, a: parseInt(a), view: "ayah" });
    };

    const onTranslatorChange = (t) => {
        setForm({ ...form, t: parseInt(t) });
    };

    const onQueryChange = (query) => {
        setForm({ ...form, q: query, s: 0, a: "", view: "search" });
    };

    const onSearch = (event) => {
        event.preventDefault();
        onSubmit(form);
    };

    return (
        <div id="search" className="card card-header col-md-12">
            <form
                className="navbar-form"
                acceptCharset="UTF-8"
                onSubmit={(e) => onSearch(e)}
            >
                <table className="table" style={{ marginBottom: 0 }}>
                    <thead>
                        <tr>
                            <td className="form-group">
                                <select
                                    className="form-control"
                                    value={form.s}
                                    onChange={(e) =>
                                        onSoorahChange(e.target.value)
                                    }
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
                            <td className="form-group  w-25">
                                <input
                                    placeholder="Ayələr"
                                    className="form-control"
                                    size="3"
                                    maxLength="3"
                                    min="1"
                                    max="286"
                                    type="number"
                                    value={form.a}
                                    onChange={(e) =>
                                        onAyahChange(e.target.value)
                                    }
                                />
                            </td>
                            <td
                                align="left"
                                valign="bottom"
                                className="form-group"
                            >
                                <select
                                    className="form-control"
                                    id="t"
                                    value={form.t}
                                    onChange={(e) =>
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
                            <td colSpan="2" valign="bottom">
                                <input
                                    placeholder="Kəlmə"
                                    className="form-control"
                                    type="text"
                                    value={form.q}
                                    onChange={(e) =>
                                        onQueryChange(e.target.value)
                                    }
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
        </div>
    );
};

export default Form;
