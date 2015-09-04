// =========================================
// SettingsHeader.js
// ----
// Small section header
// =========================================

// ---- External Dependencies ----
import React, { Component } from 'react';

// ---- Internal Dependencies ----

// ---- Styles ----
import styles from './SettingsHeader.css';

// ---- React Class ----
class SettingsHeader extends Component {

  static propTypes = {
    text: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div className={ styles.container }>
        <h6 className={ styles.text }>{ this.props.text }</h6>
      </div>
    );
  }

};

// ==== Module Export ====
export default SettingsHeader;
