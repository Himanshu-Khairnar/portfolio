import { useState,useEffect,useRef } from "react";
import * as info from "./Constant/Constant";
let commands = {
  help: info.help,
  aboutme: info.aboutme,
  aboutmeRo: info.aboutmeRo,
  experience: info.experience,
  education: info.education,
  skills: info.skills,
  contact: info.social,
  projects: info.projects,
  banner: info.banner,
  github: info.github,
  resume: info.resume,
  clear: "clear",
};
function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { cmd: "himanshu@portfolio:~$ <br>", res: commands.banner },
  ]);
  const inputRef = useRef(null);


   useEffect(() => {
    inputRef.current.focus();

    const handleClick = () => inputRef.current.focus();
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let command = input.toLowerCase();

    let output =
      commands[command] ||
      `Command not found: ${input}. Try 'help'.`;
    if (command === "clear") {
      setHistory([{ cmd: "himanshu@portfolio:~$ ", res: commands["banner"] }]);
    } else {
      setHistory([
        ...history,
        { cmd: "himanshu@portfolio:~$ " + input, res: output },
      ]);
    }

    setInput("");
  };

  return (
    <div>
      <div className="circleButton">
          <span className="roundCircle circleColorRed "></span>
          <span className="roundCircle circleColorYellow"></span>
          <span className="roundCircle circleColorGreen"></span>
        </div>
      <div className="">
        <div className="  ">
          {history.map((h, i) => (
            <div key={i}>
              <p
                className="textColor"
                dangerouslySetInnerHTML={{ __html: h.cmd }}
              ></p>
              {Array.isArray(h.res) ? (
                h.res.map((line, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: line }}></p>
                ))
              ) : (
                <p dangerouslySetInnerHTML={{ __html: h.res }}></p>
              )}
            </div>
          ))}
        </div>
    <form onSubmit={handleSubmit} className="form">
  <span className="prompt">{"himanshu@portfolio:~$  "}</span>
  <div className="form-flex">
    <div className="input-wrapper">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
        className="input"
        autoFocus
        style={{ width: `${input.length + 1}ch` }} 
      />
      <span className="cursor"></span>
    </div>
  </div>
</form>

      </div>
    </div>
  );
}

export default App;
