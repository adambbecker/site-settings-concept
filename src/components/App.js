// =========================================
// App.js
// ----
// Main component that houses demo
// =========================================

// ---- External Dependencies ----
import React, { Component } from 'react';

// ---- Internal Dependencies ----
import MasterBar from './MasterBar/MasterBar';
import DemoArea from './DemoArea/DemoArea';

// ---- Styles ----
import 'abb-reset-css';
import styles from './App.css';

// ---- React Class ----
class App extends Component {

  render() {
    return (
      <div className={ styles.app }>
        <MasterBar />
        <DemoArea />
      </div>
    );
  }

};

// ==== Module Export ====
export default App;
