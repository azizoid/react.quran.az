import React, { useEffect } from "react";

const Transliteration = ({ content }) => {
    let colors = [
        "#3490dc",
        "#6574cd",
        "#9561e2",
        "#f66d9b",
        "#e3342f",
        "#f6993f",
        "#38c172",
        "#4dc0b5",
        "#6cb2eb"
    ];

    let text = content.split(" ");

    return text.map((word, index) => {
        const rand = Math.floor(Math.random() * colors.length);
        const randomColor = colors[rand];
        return (
            <span style={{ color: randomColor }} key={index}>
                {word + " "}
            </span>
        );
    });
};

export default Transliteration;
