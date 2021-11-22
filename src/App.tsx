import { Tab } from "./components/Tab";
import { Tabs } from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tab year={1987}>
          See yaasdasdasd later, <em>Alligator</em>
        </Tab>
        <Tab year={1995}>
          See ya later, <em>Cat</em>
        </Tab>
        <Tab year={2021}>
          After 'while, <em>Crocodile</em>
        </Tab>
        <Tab year={2000}>
          Nothing to see here, this tab is <em>extinct</em>!
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
