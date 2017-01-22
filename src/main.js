import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import transList from './Transactions';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(transList),
    document.getElementById('transactionsList')
  );
});
