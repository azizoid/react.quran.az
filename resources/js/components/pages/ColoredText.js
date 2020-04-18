import React, { useEffect } from "react";

const ColoredText = ({ content }) => {
    let colors = [
        "#3490dc",
        "#6574cd",
        "#9561e2",
        "#f66d9b",
        "#f6993f",
        "#38c172",
        "#4dc0b5",
        "#6cb2eb"
    ];

    let text = content.split(" ");
    useEffect(() => {}, []);

    return text.map((word, index) => {
        const randomColor = colors[_.random(1, colors.length)];
        return (
            <span style={{ color: randomColor }} key={index}>
                {word + " "}
            </span>
        );
    });
};

export default ColoredText;
