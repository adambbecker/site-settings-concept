// ==========================================
// SettingsInput.js
// ----
// Standard "text input" for various settings
// ==========================================

// ---- External Dependencies ----
import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

// ---- Internal Dependencies ----

// ---- Styles ----
import styles from './SettingsInput.css';

// ---- React Class ----
class SettingsInput extends Component {

  static propTypes = {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onHeightChange: React.PropTypes.func
  }

  render() {
    return (
      <div className={ styles.container }>
        <TextareaAutosize
          ref="textarea"
          className={ styles.base }
          placeholder="The best blog ever..."
          value={ this.props.value }
          useCacheForDOMMeasurements={ true }
          defaultValue={ this.props.initialValue }
          onChange={ this.props.onChange }
          onHeightChange={ this.props.onHeightChange }
          onFocus={ ::this._handleFocus } />
      </div>
    );
  }

  _handleFocus() {
    const { value } = this.props;
    React.findDOMNode( this.refs.textarea ).setSelectionRange( value.length, value.length );
  }

};

// ==== Module Export ====
export default SettingsInput;
