import React from "react";
import Helmet from "react-helmet";

const TitleComponent = ({ title, description }) => {
    var defaultTitle = "Quran.az - Öz Kitabını Oxu";
    var defaultDescription = "Quran.az - Öz Kitabını Oxu";
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
            <meta
                name="description"
                content={description + " | " + defaultDescription}
            />

            <meta property="og:title" content={title ? title : defaultTitle} />
            <meta
                property="og:description"
                content={description || defaultDescription}
            />
        </Helmet>
    );
};

export { TitleComponent };
