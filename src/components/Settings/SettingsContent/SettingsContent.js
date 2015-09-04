// ============================================
// SettingsContent.js
// ----
// Content wrapper for a current setting & form
// - responsible for switching current to form
// ============================================

// ---- External Dependencies ----
import React, { Component } from 'react';
import { Spring } from 'react-motion';

// ---- Internal Dependencies ----

// ---- Styles ----
import styles from './SettingsContent.css';

// ---- React Class ----
class SettingsContent extends Component {

  static propTypes = {
    minHeight: React.PropTypes.number,
    springConfig: React.PropTypes.arrayOf( React.PropTypes.number )
  }

  static defaultProps = {
    minHeight: 0,
    springConfig: [170, 26]
  }

  render() {
    return (
      <Spring defaultValue={ ::this._getAnimDefValue() } endValue={ ::this._getAnimEndValue() }>
        { interpolated =>
          <div
            ref="container"
            className={ styles.container }
            style={ {
              minHeight: interpolated.minHeight.val
            } }>
            { this.props.children }
          </div>
        }
      </Spring>
    );
  }

  // Animation
  // ---------------------
  _getAnimDefValue() {
    const { springConfig } = this.props;

    return {
      minHeight: { val: 0, config: springConfig }
    };
  }

  _getAnimEndValue() {
    const { minHeight, springConfig } = this.props;

    return {
      minHeight: { val: minHeight, config: springConfig }
    };
  }

};

// ==== Module Export ====
export default SettingsContent;
