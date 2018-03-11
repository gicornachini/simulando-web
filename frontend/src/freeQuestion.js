import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import './freeQuestion.css'
import FreeQuestion from './components/pages/FreeQuestion';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FreeQuestion />, document.getElementById('root'));
registerServiceWorker();
