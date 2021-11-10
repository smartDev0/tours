const { EVENT_PAGE_VIEW } = require("./src/constants/events");
const Cookies = require("universal-cookie").default;

exports.onRouteUpdate = ({ location }) => {
    const cookies = new Cookies(document.cookie);
    const rawCookies = {};


    if (window) {
        if (window.customerly) {
            window.customerly.update();
        }

    }
};
