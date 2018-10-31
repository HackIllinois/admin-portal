import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from '@material-ui/core/Button';

import School from '../../components/School';

const Home = () => (
  <div className="App">
    <h1 className="admin-Header">Admin Portal</h1>

    <div className="div-List grid">
      <div className="grid-element">
        Feb 22-24, 2019<br />
        Maybe announcements here or something
      </div>

      <div className="grid-element">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis varius quam quisque id diam. Cras fermentum odio eu feugiat pretium. Id consectetur purus ut faucibus pulvinar elementum. Morbi tristique senectus et netus et malesuada fames ac. Tristique risus nec feugiat in fermentum posuere urna. Elementum sagittis vitae et leo duis ut. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.
      </div>

      <div className="grid-element">
        <School />
      </div>

      <div className="grid-element grid-element-tabs">
        <Tabs>
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Tab>Tab 4</Tab>
          </TabList>

          <TabPanel>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TabPanel>
          <TabPanel>Non arcu risus quis varius quam quisque id diam. Cras fermentum odio eu feugiat pretium. Id consectetur purus ut faucibus pulvinar elementum. </TabPanel>
          <TabPanel>Morbi tristique senectus et netus et malesuada fames ac. Tristique risus nec feugiat in fermentum posuere urna.</TabPanel>
          <TabPanel>Elementum sagittis vitae et leo duis ut. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.</TabPanel>
        </Tabs>
      </div>
    </div>
  </div>
);

export default Home;
