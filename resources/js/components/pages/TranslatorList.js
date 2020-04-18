import React from "react";
import Translator from "./Translator";

const TranslatorList = ({ data, soorahTitle }) => {
    const translatorList = [
        ,
        "Əlixan Musayev",
        "Bünyadov-Məmmədəliyev",
        "Эльмир Кулиев"
    ];
    return (
        <ul className="nav nav-tabs nav-fill">
            <li className="nav-item">
                <a href={"/" + data.s} className="nav-link active">
                    {soorahTitle}
                </a>
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
                        return (
                            <Translator
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
