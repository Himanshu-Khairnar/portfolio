import { useState } from "react";
import * as info from "./Constant/Constant";
let commands = {
  help: info.help,
  aboutme: info.aboutme,
  aboutmeRo: info.aboutmeRo,
  experience: info.experience,
  education: info.education,
  skills: info.skills,
  social: info.social,
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
  console.log(history[0].res);

  const handleSubmit = (e) => {
    e.preventDefault();
    let output =
      commands[input.toLowerCase()] ||
      `Command not found: ${input}. Try 'help'.`;
    if (input.toLowerCase() === "clear") {
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
    <div
      className="w-full h-screen p-4  text-white   font-mono selection:bg-fuchsia-300 selection:text-fuchsia-900 transition-all
    "
    >
      <div className="flex gap-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <div className="">
        <div className=" rounded-lg p-4 h-min overflow-y-auto  ">
          {history.map((h, i) => (
            <div key={i}>
              <p
                className="text-green-300 "
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
        <form onSubmit={handleSubmit} className="mt-2 pl-4 flex gap-0">
          <span className="mr-2">{"himanshu@portfolio:~$"}</span>
          <div className="flex">
            <div className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="outline-none text-green-400 caret-transparent bg-transparent"
                autoFocus
                style={{ width: `${input.length + 1}ch` }} // expand as you type
              />
              <span className="absolute right-0 top-0 inline-block w-[8px] h-[1.4em] bg-green-400 animate-blink"></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
