import React from "react";
import ReactDOM from "react-dom";

import PrayerWidget from "./PrayerWidget";
import RandomAyah from "./RandomAyah";
import FacebookPage from "./FacebookPage";

const Sidebar = () => {
    return (
        <div style={{ fontSize: "0.9rem" }}>
            <PrayerWidget />
            <br />
            <RandomAyah />
            <hr />
            <FacebookPage />
        </div>
    );
};
export default Sidebar;

if (document.getElementById("sidebar")) {
    ReactDOM.render(<Sidebar />, document.getElementById("sidebar"));
}
