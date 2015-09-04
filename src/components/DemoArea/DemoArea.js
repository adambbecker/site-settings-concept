// =========================================
// DemoArea.js
// ----
// Flex container used to center demo
// =========================================

// ---- External Dependencies ----
import React, { Component } from 'react';

// ---- Internal Dependencies ----
import SettingsDemo from '../Demos/SettingsDemo';

// ---- Styles ----
import styles from './DemoArea.css';

// ---- React Class ----
class DemoArea extends Component {

  render() {
    return (
      <div className={ styles.container }>
        <SettingsDemo />
      </div>
    );
  }

};

// ==== Module Export ====
export default DemoArea;
