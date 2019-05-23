import React from 'react';
import { render } from 'react-dom'
// Curly braces = we only need one method, kinda cherry picking the method
import StorePicker from './components/StorePicker';
import App from './components/App';

import './css/style.css';

render(<App/>, document.querySelector('#main'));