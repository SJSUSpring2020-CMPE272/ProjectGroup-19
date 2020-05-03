import React, { Component } from 'react';
import dashboardSpec from '../src/data/dashboard.json';
//import Img from 'react-image';
//import mapPic from './../src/map.jpg';

class Map extends Component {

  //state = { map: mapPic };
  static async initApi(sessionCode) {
    console.log(sessionCode);
    const api = new CognosApi({
      cognosRootURL: 'https://us-south.dynamic-dashboard-embedded.cloud.ibm.com/daas/',
      sessionCode,
      node: document.getElementById('map'),
    });
    await api.initialize();
    return api;
  }

  static async fetchSessionCode() {
    const res = await fetch('/map');
    console.log(res);
    const json = await res.json();
    return json.sessionCode;
  }

  async componentDidMount() {
    const sessionCode = await Map.fetchSessionCode();
    const api = await Map.initApi(sessionCode);
    api.dashboard
      .openDashboard({
        dashboardSpec: JSON.parse(dashboardSpec),
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    
    return (
      <div > 
        <img alt="Map Screenshot" />
      </div>
    );
  }
}
export default Map;
