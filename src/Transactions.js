import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */

class transactionList extends React.Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    fetch('http://588487486d8e0d1200b7064a.mockapi.io/api/todolist/v1/tasks')
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          transactions:responseJSON
        });
      })
  }
 
  render() {
    var transList = this.state.transactions.map(function(transaction, i) {
      return (
        <div key={i}>
          <div className='transactionId' key={transaction.id} id={transaction.id}>
            <p className='retailer'>{transaction.name}</p>
            <p className='transactionDate'>{transaction.createdAt}</p>
          </div>
        </div>
      );
    });

    return(
      <div>
        {transList}
      </div>
    )
  }
}

export default transactionList;
