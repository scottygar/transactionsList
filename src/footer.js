import React from 'react';
/*
 * A class to create the page header.
 */

const styles = {
  floatingFooter: {
    display: 'block',
    position: 'fixed',
    backgroundColor: '#f6f6f6',
    color: 'black',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40px',
    zIndex: 2,
  },

  footerFont: {
    width: '50%',
    margin: '10px 30% 5px 30%',
    fontFamily: 'Verdana',
    fontStyle: 'initial',
  }
}

class footer extends React.Component {
  render() {
    return(
      <div style={styles.floatingFooter}>
        <div style={styles.footerFont}>Test floatingFooter</div>
      </div>
    )
  }
}

export default footer;
