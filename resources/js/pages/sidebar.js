import React from "react";
import ReactDOM from "react-dom";

import PrayerWidget from "../sidebar/prayer.widget.component";
import RandomAyah from "../sidebar/random.ayah.component";
import FacebookPage from "../sidebar/facebook.page.component";

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
