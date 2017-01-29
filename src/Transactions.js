import React from 'react';

/*
 * A class to create a list of transactions from Monzo.
 */


const styles = {
  listDiv:{
    margin: 'auto',
    width: '55%',
  },
  
  containerDiv: {
    border: 'solid',
    borderRadius: '15px 50px',
    padding: '10px',
    margin: '45px',
    boxShadow: '10px 10px 5px #888888'
  },
  
  amountDiv:{
    'float': 'left',
    padding: '2px',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  
  textDiv:{
    padding: '2px',
  }
}



class transactionList extends React.Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    fetch('http://588487486d8e0d1200b7064a.mockapi.io/api/transactions/v1/tasks')
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
        <div style={styles.listDiv} className='transactionId' key={i} id={transaction.id}>
          <div style={styles.containerDiv}>
            <div style={styles.amountDiv}>
              <p className='amount'>{'£' + (transaction.amount/100).toFixed(2)}</p>
            </div>
            <div style={styles.textDiv}>
              <p className='transactionDate'>{new Date(transaction.created).toLocaleDateString()}</p>
              <p className='description'>{transaction.description}</p>
            </div>
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
