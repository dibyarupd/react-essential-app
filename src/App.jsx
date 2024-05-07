import { useState } from "react";

import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [clickedTopic, setClickedTopic] = useState();

  function handleClick(clickedButton) {
    setClickedTopic(clickedButton);
    // console.log(clickedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              label="Components"
              onClick={() => handleClick("components")}
              isSelected={clickedTopic === "components"}
            />
            <TabButton
              label="JSX"
              onClick={() => handleClick("jsx")}
              isSelected={clickedTopic === "jsx"}
            />
            <TabButton
              label="Props"
              onClick={() => handleClick("props")}
              isSelected={clickedTopic === "props"}
            />
            <TabButton
              label="State"
              onClick={() => handleClick("state")}
              isSelected={clickedTopic === "state"}
            />
          </menu>
          {!clickedTopic ? (
            <p>Please select an option</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[clickedTopic].title}</h3>
              <p>{EXAMPLES[clickedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[clickedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
