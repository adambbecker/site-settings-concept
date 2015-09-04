// ===========================================
// TitleDemo.js
// ----
// Specific demo for the site title
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
class TitleDemo extends Component {

  state = {
    formVisible: false,
    contentMinHeight: 0,
    inputValue: 'Adam\'s Silo',
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
          animKey="siteTitle"
          header="Site Title"
          saved={ this.state.saved }>Displayed in the tab title of web browsers and in the header of most themes.</SettingsLabel>
        <SettingsContent minHeight={ this.state.contentMinHeight }>
          <SettingsCurrent
            ref="current"
            currentText={ this.state.inputValue }
            editText="Edit Title"
            visible={ ! this.state.formVisible }
            onClick={ ::this._handleCurrentClick }
            springConfig={ this.props.springConfig } />
          <SettingsForm
            ref="form"
            animKey="siteTitle"
            saveText="Save Title"
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
      }, 2400 );
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
export default TitleDemo;
