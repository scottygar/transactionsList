import React from 'react';
/*
 * A class to create the page header.
 */

const styles = {
  floatingHeader: {
    display: 'block',
    position: 'fixed',
    backgroundColor: '#f6f6f6',
    color: 'black',
    top: 0,
    left: 0,
    right: 0,
    height: '40px',
    zIndex: 2,
  },

  headerFont: {
    width: '50%',
    margin: '10px 30% 5px 30%',
    fontFamily: 'Verdana',
    fontStyle: 'initial',
  }
}

class header extends React.Component {
  render() {
    return(
      <div style={styles.floatingHeader}>
        <div style={styles.headerFont}>Test floatingHeader</div>
      </div>
    )
  }
}

export default header;
