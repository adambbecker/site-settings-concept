// ===========================================
// SettingsDemo.js
// ----
// Specific demo for parts of general settings
// ===========================================

// ---- External Dependencies ----
import React, { Component } from 'react';

// ---- Internal Dependencies ----
import Settings from '../Settings/Settings';
import TitleDemo from './TitleDemo';
import TaglineDemo from './TaglineDemo';

// ---- Styles ----

// ---- React Class ----
class SettingsDemo extends Component {

  render() {
    const springConfig = [320, 23];

    return (
      <Settings header="Profile">
        <TitleDemo springConfig={ springConfig } />
        <TaglineDemo springConfig={ springConfig } />
      </Settings>
    );
  }

};

// ==== Module Export ====
export default SettingsDemo;
