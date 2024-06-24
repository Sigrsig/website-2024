import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import FrontPage from "./FrontPage";
import Cat from "./Cat";

function Front() {
  const [commandInput, setCommandInput] = useState("");
  const [aboutVisible, setAboutVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [catVisible, setCatVisible] = useState(false);
  const [frontVisible, setFrontVisible] = useState(true);
  const [errorVisible, setErrorVisible] = useState(false);

  const handleCommandInput = (e) => {
    setCommandInput(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (commandInput.toLowerCase() === "about") {
        setAllInvisible();
        setAboutVisible(true);
      } else if (commandInput.toLowerCase() === "contact") {
        setAllInvisible();
        setContactVisible(true);
      } else if (
        commandInput.toLowerCase() === "home" ||
        commandInput.toLowerCase() === "help"
      ) {
        setAllInvisible();
        setFrontVisible(true);
      } else if (commandInput.toLowerCase() === "cat") {
        setAllInvisible();
        setCatVisible(true);
      } else if (commandInput.toLowerCase() === "cv") {
        window.open(
          "https://drive.google.com/file/d/1pRT-Tm7CyxJ_PDS5FM9Phy5F9dN-biQ4/view",
          "_blank"
        );
      } else if (commandInput.toLowerCase() === "github") {
        window.open("https://github.com/Sigrsig", "_blank");
      } else if (commandInput.toLowerCase() === "linkedin") {
        window.open("https://www.linkedin.com/in/sigga-green/", "_blank");
      } else {
        setAllInvisible();
        setErrorVisible(true);
      }

      // Add "option not availabe" page
      event.target.value = "";
    }
  };

  const setAllInvisible = () => {
    setAboutVisible(false);
    setContactVisible(false);
    setFrontVisible(false);
    setCatVisible(false);
    setErrorVisible(false);
    return;
  };

  return (
    <div>
      <pre>{myName}</pre>
      <p className="w-text">Frontend-engineer, Berlin Germany</p>

      {frontVisible && <FrontPage pageSetters={{ setAboutVisible }} />}
      {aboutVisible && <About />}
      {contactVisible && <Contact />}
      {catVisible && <Cat />}
      {errorVisible && (
        <p>
          Unknown input. For a list of options type &quot;Home&quot; or
          &quot;Help&quot;
        </p>
      )}
      <div id="command-line">
        <div className="whitearrow" />
        <p className="w-text">1410@WWIHD</p>
        <div className="location-bar">
          <div className="blackarrow" />
          <p className="location">/Users/sigga_green/website/front</p>
          <div className="bluearrow" />
          <input
            type={"text"}
            autoFocus={true}
            onBlur={({ target }) => target.focus()}
            onKeyDown={handleKeyDown}
            onInput={handleCommandInput}
          />
        </div>
      </div>
    </div>
  );
}

const myName = `
 _____ _                      _____                     
/ ____(_)                    / ____|                    
| (___  _  __ _  __ _  __ _  | |  __ _ __ ___  ___ _ __  
\\____ \\| |/ _\` |/ _\` |/ _\` | | | |_ | '__/ _ \\/ _ \\ '_ \\ 
 ____) | | (_| | (_| | (_| | | |__| | | |  __/  __/ | | |
|_____/|_|\\__, |\\__, |\\__,_|  \\_____|_|  \\___|\\___|_| |_|
           __/ | __/ |                                   
          |___/ |___/  `;

export default Front;
