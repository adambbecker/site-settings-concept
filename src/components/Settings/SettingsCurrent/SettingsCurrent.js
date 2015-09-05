// ============================================
// SettingsCurrent.js
// ----
// Contains standard current content
// ============================================

// ---- External Dependencies ----
import React, { Component } from 'react';
import { Spring } from 'react-motion';

// ---- Internal Dependencies ----

// ---- Styles ----
import styles from './SettingsCurrent.css';

// ---- React Class ----
class SettingsCurrent extends Component {

  static propTypes = {
    currentText: React.PropTypes.node.isRequired,
    editText: React.PropTypes.node,
    visible: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    springConfig: React.PropTypes.arrayOf( React.PropTypes.number )
  }

  static defaultProps = {
    editText: 'Edit',
    visible: true,
    springConfig: [170, 26]
  }

  render() {
    let containerStyles = styles.container;
    let currentStyles = styles.currentText;

    if ( ! this.props.visible ) {
      containerStyles = styles.containerInvisible;
      currentStyles = styles.currentTextConstrain;
    }

    return (
      <Spring defaultValue={ ::this._getAnimDefValue() } endValue={ ::this._getAnimEndValue() }>
        { interpolated =>
          <div className={ containerStyles } onClick={ this.props.onClick }>
            <p
              className={ currentStyles }
              style={ {
                transform: `translate(${ interpolated.currentText.x.val }px, ${ interpolated.currentText.y.val }px)`,
                WebkitTransform: `translate(${ interpolated.currentText.x.val }px, ${ interpolated.currentText.y.val }px)`
              } }>{ this.props.currentText }</p>
            <p
              className={ styles.editText }
              style={ {
                transform: `scale(${ interpolated.editText.scale.val }) translateY(${ interpolated.editText.y.val }px)`,
                WebkitTransform: `scale(${ interpolated.editText.scale.val }) translateY(${ interpolated.editText.y.val }px)`,
                opacity: `${ interpolated.editText.opacity.val }`
              } }>{ this.props.editText }</p>
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
      currentText: {
        x: { val: 0, config: springConfig },
        y: { val: 0, config: springConfig }
      },
      editText: {
        scale: { val: 1, config: springConfig },
        y: { val: 0, config: springConfig },
        opacity: { val: 1, config: springConfig }
      }
    };
  }

  _getAnimEndValue( prevValue ) {
    const { springConfig } = this.props;

    let endValue = {
      currentText: {
        x: { val: 17, config: springConfig },
        y: { val: 9, config: springConfig }
      },
      editText: {
        scale: { val: 0.8, config: [170, 20] },
        y: { val: 20, config: [170, 20] },
        opacity: { val: 0, config: springConfig }
      }
    };

    if ( this.props.visible ) {
      endValue = this._getAnimDefValue();
    }

    return endValue;
  }

};

// ==== Module Export ====
export default SettingsCurrent;
