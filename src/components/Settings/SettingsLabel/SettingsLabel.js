// =========================================
// SettingsLabel.js
// ----
// Label for a particular setting attribute
// - includes label & explanation
// =========================================

// ---- External Dependencies ----
import React, { Component } from 'react';
import { TransitionSpring } from 'react-motion';

// ---- Internal Dependencies ----

// ---- Styles ----
import styles from './SettingsLabel.css';

// ---- React Class ----
class SettingsLabel extends Component {

  static propTypes = {
    header: React.PropTypes.string.isRequired,
    animKey: React.PropTypes.string.isRequired,
    saved: React.PropTypes.bool,
    springConfig: React.PropTypes.arrayOf( React.PropTypes.number )
  }

  static defaultProps = {
    saved: false,
    springConfig: [170, 26]
  }

  state = {
    mobileExplainExpanded: false
  }

  render() {
    const { children, header, animKey } = this.props;
    let explainStyles = styles.explainHidden;
    let mobileIconStyles = styles.mobileInfoIcon;

    if ( this.state.mobileExplainExpanded ) {
      explainStyles = styles.explain;
      mobileIconStyles = styles.mobileInfoIconOpen;
    }

    return (
      <div className={ styles.container }>
        <h6 className={ styles.header } onClick={ ::this._handleHeaderClick }>
          <span className={ styles.headerTxt }>{ this.props.header }</span>
          <span className={ styles.mobileInfo }>
            <svg
              className={ styles.mobileInfoIcon }
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M13 9h-2V7h2v2zm0 2h-2v6h2v-6zm-1-7c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m0-2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
            </svg>
          </span>
        </h6>
        <TransitionSpring
          endValue={ ::this._getAnimEndValue() }
          willLeave={ ::this._willLeave }
          willEnter={ ::this._willEnter }>
          { currentValue =>
            <div>
              { Object.keys(currentValue).map(key => {
                let [ animatingElem, explainStyle, savedStlye, savedStlyeTransform ] = [ null, null, null, null ];
                const config = currentValue[ key ];

                if ( key === 'explain' ) {
                  explainStyle = {
                    opacity: `${ config.opacity.val }`
                  };

                  animatingElem = (
                    <p
                      key={ `${ animKey }-explain` }
                      className={ explainStyles }
                      style={ explainStyle }>{ children }</p>
                  );
                } else if ( key === 'saved' ) {
                  savedStlyeTransform = `translateY(${ config.y.val }px)`;
                  savedStlye = {
                    transform: savedStlyeTransform,
                    WebkitTransform: savedStlyeTransform,
                    opacity: `${ config.opacity.val }`
                  };

                  animatingElem = (
                    <p
                      key={ `${ animKey }-saved` }
                      className={ styles.saved }
                      style={ savedStlye }>
                      <svg
                        className={ styles.savedIcon }
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                          <path d="M9 19.414l-6.707-6.707 1.414-1.414L9 16.586 20.293 5.293l1.414 1.414" />
                      </svg>
                      <span>{ `${ header } Saved.` }</span>
                    </p>
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
    let configs = {
      explain: {
        opacity: { val: 1, config: springConfig }
      }
    };

    if ( this.props.saved ) {
      configs.explain.opacity.val = 0;
      configs.saved = {
        y: { val: 0, config: springConfig },
        opacity: { val: 1, config: springConfig }
      }
    }

    return configs;
  }

  _willEnter( key ) {
    const { springConfig } = this.props;
    let configs = {};

    switch ( key ) {
      case 'explain':
        configs = {
          opacity: { val: 1, config: springConfig }
        };
        break;

      case 'saved':
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
      case 'explain':
        configs = {
          opacity: { val: 1, config: springConfig }
        };
        break;

      case 'saved':
        configs = {
          y: { val: 0, config: springConfig },
          opacity: { val: 0, config: springConfig }
        };
        break;

    }

    return configs;
  }

  // Handlers
  // ---------------------
  _handleHeaderClick() {
    if ( window.innerWidth <= 666 ) {
      this.setState( {
        mobileExplainExpanded: ! this.state.mobileExplainExpanded
      } );
    }
  }

};

// ==== Module Export ====
export default SettingsLabel;
