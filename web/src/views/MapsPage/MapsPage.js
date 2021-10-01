import React, { Component } from "react";
import { MapComponent } from "../../components/MapComponent";

import './styles.scss';

class MapsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="bg-blueGray-100" id="masp-page">
          <div className="maps-container">
            <MapComponent/>
          </div>
        </div>
      </>
    );
  }
}

export { MapsPage };
