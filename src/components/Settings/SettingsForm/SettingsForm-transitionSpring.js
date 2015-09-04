// =========================================
// SettingsForm.js
// ----
// Wrapper for an individual setting
// =========================================

// ---- External Dependencies ----
import React, { Component } from 'react';
import { TransitionSpring } from 'react-motion';

// ---- Internal Dependencies ----

// ---- Styles ----
import styles from './SettingsForm.css';

// ---- React Class ----
class SettingsForm extends Component {

  static propTypes = {
    onCancel: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    saveText: React.PropTypes.string,
    visible: React.PropTypes.bool,
    springConfig: React.PropTypes.arrayOf( React.PropTypes.number )
  }

  static defaultProps = {
    saveText: 'Save',
    visible: false,
    springConfig: [170, 26]
  }

  render() {
    const { visible, children, onCancel, onSave, saveText } = this.props;

    return (
      <div className={ styles.container }>
        <TransitionSpring
          endValue={ ::this._getAnimEndValue() }
          willLeave={ ::this._willLeave }
          willEnter={ ::this._willEnter }>
          { currentValue =>
            <div ref="animContainer">
              { Object.keys(currentValue).map(key => {
                let [ animatingElem, formStyle, buttonsStyle ] = [ null, null, null, null ];
                const config = currentValue[ key ];

                if ( key === 'form' ) {
                  formStyle = {
                    transform: `scale(${ config.scale.val })`,
                    opacity: `${ config.opacity.val }`
                  };

                  animatingElem = (
                    <div style={ formStyle }>
                      { children }
                    </div>
                  );
                } else if ( key === 'buttons' ) {
                  buttonsStyle = {
                    transform: `translateY(${ config.y.val }px)`,
                    opacity: `${ config.opacity.val }`
                  };

                  animatingElem = (
                    <div className={ styles.buttonContainer } style={ buttonsStyle }>
                      <button
                        className={ styles.cancelButton }
                        onClick={ onCancel }>Cancel</button>
                      <button
                        className={ styles.saveButton }
                        onClick={ onSave }>{ saveText }</button>
                    </div>
                  );
                }

                return animatingElem;
              }) }
            </div>
          }
        </TransitionSpring>
      </div>
    );
  }

  // Animation
  // ---------------------
  _getAnimEndValue() {
    const { springConfig } = this.props;
    let configs = {};

    if ( this.props.visible ) {
      configs = {
        form: {
          scale: { val: 1, config: springConfig },
          opacity: { val: 1, config: springConfig }
        },
        buttons: {
          y: { val: 0, config: springConfig },
          opacity: { val: 1, config: springConfig }
        }
      };
    }

    return configs;
  }

  _willEnter( key ) {
    const { springConfig } = this.props;
    let configs = {};

    switch ( key ) {
      case 'form':
        configs = {
          scale: { val: 0.9, config: springConfig },
          opacity: { val: 0, config: springConfig }
        };
        break;

      case 'buttons':
        configs = {
          y: { val: 20, config: springConfig },
          opacity: { val: 0, config: springConfig }
        };
        break;

    }

    return configs;
  }

  _willLeave( key, value, endValue, currentValue, currentSpeed ) {
    const { springConfig } = this.props;
    const config = currentValue[ key ];
    let configs = {};

    if (currentValue[key].opacity.val === 0 && currentSpeed[key].opacity.val === 0) {
      return null; // kill component when opacity reaches 0
    }

    switch ( key ) {
      case 'form':
        configs = {
          scale: { val: 0.9, config: springConfig },
          opacity: { val: 0, config: springConfig }
        };
        break;

      case 'buttons':
        configs = {
          y: { val: 20, config: springConfig },
          opacity: { val: 0, config: springConfig }
        };
        break;

    }

    return configs;
  }

};

// ==== Module Export ====
export default SettingsForm;
