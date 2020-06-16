import React from "react";
import ReactDom from "react-dom";

import '@csstools/normalize.css';
import './style.css';

// React hook component
import useDropDown from "./useDropDown";

// Qovery logo, don't use as icon
import logoImg from "./assets/qovery-logo.png";

// Support only use SVG icons. 
// You can add more icons in assets directory from https://fontawesome.com/icons?d=gallery&m=free
import IconExternalLink from "./assets/external-link-square-alt-solid.svg";
import IconDownload from "./assets/cloud-download-alt-solid.svg";

const App = () => {
    // Init dropdown options
    const options = {
        'label': "Open me",
        // 'defaultColor': "F00",
        'Icon': IconDownload,
        'items': [
            {'id': 1, 'label': "External link", 'Icon': IconExternalLink},
            {'id': 2, 'label': "Download link", 'Icon': IconDownload},
            {'id': 3, 'label': "Link without icon"}
        ]
    };

    const [MyDropDown] = useDropDown(options);

    return (
        <>
            <header><img src={logoImg} alt="logo Qovery" /></header>
            <section><MyDropDown /></section>
        </>
    );
};

ReactDom.render(<App />, document.getElementById("root"));