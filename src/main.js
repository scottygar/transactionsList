import React from 'react';
import ReactDOM from 'react-dom';
import transList from './Transactions';
import header from './header';
import footer from './footer';

 
document.addEventListener('DOMContentLoaded', function() {
  
  ReactDOM.render(
    React.createElement(header),
    document.getElementById('header')
  );

  ReactDOM.render(
    React.createElement(transList),
    document.getElementById('transactionsList')
  );

  ReactDOM.render(
    React.createElement(footer),
    document.getElementById('footer')
  );

});
