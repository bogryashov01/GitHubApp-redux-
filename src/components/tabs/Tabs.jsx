import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ProfileContainer from '../../containers/ProfileContainer';
import ReposContainer from '../../containers/ReposContainer';
import FollowersContainer from '../../containers/FollowersContainer';
import {
    Route
} from "react-router-dom";


const Tabss = (props) => {
    const {tabIndex, onSelect, onClick}= props;
    debugger
    return (
        <Tabs selectedIndex={tabIndex} onSelect={onSelect}>
            <TabList>
                <Tab>Profile</Tab>
                <Tab>Repos</Tab>
                <Tab>Followers</Tab>
            </TabList>
            <Route path="/:name/profile">
            <TabPanel>
                <ProfileContainer/>
            </TabPanel>
            </Route>
            <Route path="/:name/repos">
            <TabPanel>
               <ReposContainer/>
            </TabPanel>
            </Route> 
            <TabPanel>
                <FollowersContainer onClick={onClick}/>
            </TabPanel>
        </Tabs>
    )
}
export default Tabss;