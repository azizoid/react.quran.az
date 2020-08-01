import React from "react";
import { Link } from "react-router-dom";

import Translator from "./translator.component";

import TRANSLATOR_LIST from "../assets/translatorList";

const TranslatorList = ({ data, soorahTitle }) => {
    const translatorList = TRANSLATOR_LIST;
    return (
        <ul className="nav nav-tabs nav-fill">
            <li className="nav-item">
                <Link
                    to={"/" + data.s + "/?t=" + data.t}
                    className="nav-link active"
                >
                    {soorahTitle}
                </Link>
            </li>

            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    {translatorList[data.t]}
                </a>

                <div className="dropdown-menu">
                    {translatorList.map((title, index) => {
                        let url =
                            "/" +
                            data.s +
                            (data.a ? "/" + data.a : "") +
                            "?t=" +
                            index;
                        return (
                            <Translator
                                url={url}
                                title={title}
                                index={index}
                                soorah={data.s}
                                ayah={data.a}
                                key={index}
                            />
                        );
                    })}
                </div>
            </li>
        </ul>
    );
};

export default TranslatorList;
