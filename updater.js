import Navbar from "./components/navbar/Navbar.js";
import About from "./components/about/About.js";

window.updater = () => {
  document.getElementById("root").innerHTML = `
        ${Navbar()}
    `;
};

updater();

export default updater;
