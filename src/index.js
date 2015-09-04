// =========================================
// Index.js
// ----
// Webpack build entry
// =========================================

// ---- External Dependencies ----
import React from 'react';

// ---- Internal Dependencies ----
import App from './components/App';

// ---- Render (entry) ----
if (typeof document !== 'undefined') {
  React.render(<App />, document.getElementById('outlet'));
}

// ==== Module Export ====
export default App;
