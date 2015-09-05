// ===========================================
// TitleDemo.js
// ----
// Specific demo for site title
// ===========================================

// ---- External Dependencies ----
import React, { Component } from 'react';

// ---- Internal Dependencies ----
import TextInputDemo from './TextInputDemo';

// ---- Styles ----

// ---- React Class ----
class TitleDemo extends Component {

  static propTypes = {
    springConfig: React.PropTypes.arrayOf( React.PropTypes.number )
  }

  static defaultProps = {
    springConfig: [170, 26]
  }

  render() {
    return (
      <TextInputDemo
        animKey="siteTitle"
        headerTxt="Site Title"
        explainTxt="Displayed in the tab title of web browsers and in the header of most themes."
        editTxt="Edit Title"
        saveTxt="Save Title"
        initialInputVal="Half Remembered Dream"
        springConfig={ this.props.springConfig } />
    );
  }

};

// ==== Module Export ====
export default TitleDemo;
