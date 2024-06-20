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
      } else if (commandInput.toLowerCase() === "home") {
        setAllInvisible();
        setFrontVisible(true);
      } else if (commandInput.toLowerCase() === "cat") {
        setAllInvisible();
        setCatVisible(true);
      }
      event.target.value = "";
    }
  };

  const setAllInvisible = () => {
    setAboutVisible(false);
    setContactVisible(false);
    setFrontVisible(false);
    setCatVisible(false);
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
