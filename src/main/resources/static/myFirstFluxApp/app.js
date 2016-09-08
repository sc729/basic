
var Dispatcher = require('flux').Dispatcher; 
import React from 'react';
import ReactDOM  from 'react-dom';
import Container from './components/Container';


ReactDOM.render(<Container title="이게 주입되고 열린다면 ㅇㅋㅇㅋ"/>, document.getElementById('content'));
console.log(Dispatcher);