import React from "react";
import ReactDOM from "react-dom";

import PrayerWidget from "./PrayerWidget";
import RandomAyah from "./RandomAyah";
import FacebookPage from "./FacebookPage";

const Sidebar = () => {
    return (
        <>
            <PrayerWidget />
            <br />
            <RandomAyah />
            <hr />
            <FacebookPage />
        </>
    );
};
export default Sidebar;

if (document.getElementById("sidebar")) {
    ReactDOM.render(<Sidebar />, document.getElementById("sidebar"));
}
