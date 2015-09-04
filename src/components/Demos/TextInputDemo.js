// ===========================================
// TextInputDemo.js
// ----
// Demo for text input based settings
// ===========================================

// ---- External Dependencies ----
import React, { Component } from 'react';

// ---- Internal Dependencies ----
import SettingsAttribute from '../Settings/SettingsAttribute/SettingsAttribute';
import SettingsLabel from '../Settings/SettingsLabel/SettingsLabel';
import SettingsContent from '../Settings/SettingsContent/SettingsContent';
import SettingsCurrent from '../Settings/SettingsCurrent/SettingsCurrent';
import SettingsForm from '../Settings/SettingsForm/SettingsForm';
import SettingsInput from '../Settings/SettingsInput/SettingsInput';

// ---- Styles ----

// ---- React Class ----
class TextInputDemo extends Component {

  static propTypes = {
    animKey: React.PropTypes.string.isRequired,
    headerTxt: React.PropTypes.string.isRequired,
    explainTxt: React.PropTypes.string,
    editTxt: React.PropTypes.string,
    saveTxt: React.PropTypes.string,
    initialInputVal: React.PropTypes.string,
    springConfig: React.PropTypes.arrayOf( React.PropTypes.number )
  }

  static defaultProps = {
    explainTxt: '',
    editTxt: 'Edit',
    saveTxt: 'Save',
    springConfig: [170, 26]
  }

  state = {
    formVisible: false,
    contentMinHeight: 0,
    inputValue: this.props.initialInputVal || '',
    saved: false
  }

  componentDidMount() {
    this.setState( {
      contentMinHeight: this._getRefHeight( 'current' )
    } );
  }

  componentDidUpdate( prevProps, prevState ) {
    if ( this.state.formVisible && ! prevState.formVisible ) {
      React.findDOMNode(this.refs.input.refs.textarea).focus();
    } else if ( ! this.state.formVisible && prevState.formVisible ) {
      React.findDOMNode(this.refs.input.refs.textarea).blur();
    }
  }

  render() {
    return (
      <SettingsAttribute>
        <SettingsLabel
          animKey={ this.props.animKey }
          header={ this.props.headerTxt }
          saved={ this.state.saved }>{ this.props.explainTxt }</SettingsLabel>
        <SettingsContent minHeight={ this.state.contentMinHeight }>
          <SettingsCurrent
            ref="current"
            currentText={ this.state.inputValue }
            editText={ this.props.editTxt }
            visible={ ! this.state.formVisible }
            onClick={ ::this._handleCurrentClick }
            springConfig={ this.props.springConfig } />
          <SettingsForm
            ref="form"
            saveText={ this.props.saveTxt }
            inputValue={ this.state.inputValue }
            visible={ this.state.formVisible }
            onCancel={ ::this._handleCancelClick }
            onSave={ ::this._handleSaveClick }
            springConfig={ this.props.springConfig }>
            <SettingsInput
              ref="input"
              value={ this.state.inputValue }
              onChange={ ::this._handleInputChange }
              onHeightChange={ ::this._handleFormHeightChange } />
          </SettingsForm>
        </SettingsContent>
      </SettingsAttribute>
    );
  }

  // Getters
  // ---------------------
  _getRefHeight( ref ) {
    return React.findDOMNode(this.refs[ ref ]).offsetHeight;
  }

  // Handlers
  // ---------------------
  _handleCurrentClick() {
    this.setState( {
      formVisible: true,
      preCancelInputValue: this.state.inputValue,
      contentMinHeight: this._getRefHeight( 'form' )
    } );
  }

  _handleCancelClick() {
    this.setState( {
      formVisible: false,
      inputValue: ( typeof this.state.preCancelInputValue !== 'undefined' ) ? this.state.preCancelInputValue : this.state.inputValue,
      contentMinHeight: this._getRefHeight( 'current' )
    } );
  }

  _handleSaveClick() {
    this.setState( {
      formVisible: false,
      saved: true,
      contentMinHeight: this._getRefHeight( 'current' )
    }, () => {
      setTimeout( () => {
        this.setState( {
          saved: false
        } );
      }, 1800 );
    } );
  }

  _handleInputChange( event ) {
    this.setState( {
      inputValue: event.target.value
    } );
  }

  _handleFormHeightChange() {
    if ( this.state.formVisible ) {
      this.setState( {
        contentMinHeight: this._getRefHeight( 'form' )
      } );
    }
  }

};

// ==== Module Export ====
export default TextInputDemo;
