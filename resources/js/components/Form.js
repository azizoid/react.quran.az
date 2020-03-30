import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s: 1,
            a: "",
            t: 1,
            q: "",
            view: "soorah"
        };

        this.onSoorahChange = this.onSoorahChange.bind(this);
        this.onAyahChange = this.onAyahChange.bind(this);
        this.onTranslatorChange = this.onTranslatorChange.bind(this);
        this.onQueryChange = this.onQueryChange.bind(this);

        this.onSearch = this.onSearch.bind(this);
    }

    onSoorahChange(event) {
        let s = event.target.value;
        if (s > 0 && s < 115) {
            this.setState({ s: event.target.value, q: "", view: "soorah" });
        }
    }

    onAyahChange(event) {
        this.setState({ a: event.target.value, view: "ayah" });
    }

    onTranslatorChange(event) {
        this.setState({ t: event.target.value });
    }

    onQueryChange(event) {
        let q = event.target.value;
        const cond = { q: q };
        if (q.length > 3) {
            cond.s = 0;
            cond.a = "";
            cond.view = "query";
        }
        this.setState({ ...cond });
    }

    onSearch(event) {
        this.props.onSearch(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div id="search" className="card card-header col-md-12">
                <form
                    className="navbar-form"
                    acceptCharset="UTF-8"
                    onSubmit={this.onSearch}
                >
                    <table className="table" style={{ marginBottom: 0 }}>
                        <thead>
                            <tr>
                                <td className="form-group">
                                    <select
                                        className="form-control"
                                        value={this.state.s}
                                        onChange={this.onSoorahChange}
                                    >
                                        <option value="0">Surələr</option>
                                        {this.props.soorahList.map(
                                            (soorah, index) => {
                                                return (
                                                    <option
                                                        value={index}
                                                        key={index}
                                                    >
                                                        {soorah}
                                                    </option>
                                                );
                                            }
                                        )}
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
                                        value={this.state.a}
                                        onChange={this.onAyahChange}
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
                                        value={this.state.t}
                                        onChange={this.onTranslatorChange}
                                    >
                                        <option value="0">Tərcüməci</option>
                                        {this.props.translatorList.map(
                                            (t, index) => {
                                                return (
                                                    <option
                                                        value={index}
                                                        key={index}
                                                    >
                                                        {t}
                                                    </option>
                                                );
                                            }
                                        )}
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
                                        value={this.state.q}
                                        onChange={this.onQueryChange}
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
    }
}

export default Form;
