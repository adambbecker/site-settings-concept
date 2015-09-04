// =========================================
// SettingsForm.js
// ----
// Wrapper for an individual setting
// =========================================

// ---- External Dependencies ----
import React, { Component } from 'react';
import { Spring } from 'react-motion';

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
    animKey: '',
    saveText: 'Save',
    visible: false,
    springConfig: [170, 26]
  }

  render() {
    const { animKey, visible, children, onCancel, onSave, saveText } = this.props;
    const containerStyles = ( this.props.visible ) ? styles.containerVisible : styles.container;

    return (
      <div className={ containerStyles }>
        <Spring defaultValue={ ::this._getAnimDefValue() } endValue={ ::this._getAnimEndValue() }>
          { interpolated =>
            <div>
              <div style={ {
                  transform: `scale(${ interpolated.form.scale.val })`,
                  opacity: `${ interpolated.form.opacity.val }`
                } }>
                { children }
              </div>
              <div
                className={ styles.buttonContainer }
                style={ {
                  transform: `translateY(${ interpolated.buttons.y.val }px)`,
                  opacity: `${ interpolated.buttons.opacity.val }`
                } }>
                <button
                  className={ styles.cancelButton }
                  onClick={ onCancel }>Cancel</button>
                <button
                  className={ styles.saveButton }
                  onClick={ onSave }>{ saveText }</button>
              </div>
            </div>
          }
        </Spring>
      </div>
    );
  }

  // Animation
  // ---------------------
  _getAnimDefValue() {
    const { springConfig } = this.props;

    return {
      form: {
        scale: { val: 0.9, config: springConfig },
        opacity: { val: 0, config: springConfig }
      },
      inputColor: {
        opacity: { val: 0, config: springConfig }
      },
      buttons: {
        y: { val: 20, config: springConfig },
        opacity: { val: 0, config: springConfig }
      }
    };
  }

  _getAnimEndValue( prevValue ) {
    const { springConfig } = this.props;

    let endValue = {
      form: {
        scale: { val: 1, config: springConfig },
        opacity: { val: 1, config: springConfig }
      },
      inputColor: {
        opacity: { val: 0, config: springConfig }
      },
      buttons: {
        y: { val: 0, config: springConfig },
        opacity: { val: 1, config: springConfig }
      }
    };

    if ( ! this.props.visible ) {
      endValue = this._getAnimDefValue();
    }

    return endValue;
  }

};

// ==== Module Export ====
export default SettingsForm;
