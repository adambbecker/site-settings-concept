// =========================================
// SettingsAttribute.js
// ----
// Wrapper for an individual setting
// =========================================

// ---- External Dependencies ----
import React, { Component } from 'react';

// ---- Internal Dependencies ----

// ---- Styles ----
import styles from './SettingsAttribute.css';

// ---- React Class ----
class SettingsAttribute extends Component {

  render() {
    return (
      <div className={ styles.container }>
        { this.props.children }
      </div>
    );
  }

};

// ==== Module Export ====
export default SettingsAttribute;
