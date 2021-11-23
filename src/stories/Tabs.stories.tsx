import { Tabs, Tab } from "../components";

export default {
  title: "Tabs",
  component: Tabs,
  argTypes: {
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
  },
};

export const Primary = (args: any) => (
  <Tabs {...args}>
    <Tab year={1987}>
      See ya later, <em>Alligator</em>
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
    <Tab year={2001}>
      Nothing to see here, this tab is <em>extinct</em>!
    </Tab>
    <Tab year={2002}>
      Nothing to see here, this tab is <em>extinct</em>!
    </Tab>
    <Tab year={2003}>
      Nothing to see here, this tab is <em>extinct</em>!
    </Tab>
  </Tabs>
);
