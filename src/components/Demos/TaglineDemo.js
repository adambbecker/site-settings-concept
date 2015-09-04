// ===========================================
// TaglineDemo.js
// ----
// Specific demo for site title
// ===========================================

// ---- External Dependencies ----
import React, { Component } from 'react';

// ---- Internal Dependencies ----
import TextInputDemo from './TextInputDemo';

// ---- Styles ----

// ---- React Class ----
class TaglineDemo extends Component {

  static propTypes = {
    springConfig: React.PropTypes.arrayOf( React.PropTypes.number )
  }

  static defaultProps = {
    springConfig: [170, 26]
  }

  render() {
    return (
      <TextInputDemo
        animKey="tagline"
        headerTxt="Tagline"
        explainTxt="A short description or catchy phrase to describe what your blog is about."
        editTxt="Edit Tagline"
        saveTxt="Save Tagline"
        initialInputVal="A test within a test. When you enter that test, the effect is compounded."
        springConfig={ this.props.springConfig } />
    );
  }

};

// ==== Module Export ====
export default TaglineDemo;
