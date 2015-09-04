// =========================================
// Settings.js
// ----
// Main container for settings demo
// =========================================

// ---- External Dependencies ----
import React, { Component } from 'react';

// ---- Internal Dependencies ----
import SettingsHeader from './SettingsHeader/SettingsHeader';

// ---- Styles ----
import styles from './Settings.css';

// ---- React Class ----
class Settings extends Component {

  static propTypes = {
    header: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div className={ styles.container }>
        <SettingsHeader text={ this.props.header } />
        <div className={ styles.spacingWrapper }>{ this.props.children }</div>
      </div>
    );
  }

};

// ==== Module Export ====
export default Settings;
