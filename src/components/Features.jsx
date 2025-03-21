// Code Generated by Sidekick is for learning and experimentation purposes only.
import React from 'react';
import { FaTruck, FaAward, FaCreditCard, FaShieldAlt, FaRupeeSign } from 'react-icons/fa';

const Features = () => {
  return (
    <div style={styles.container}>
      <div style={styles.feature}>
        <FaTruck style={styles.icon} />
        <p style={styles.text}>FREE SHIPPING</p>
      </div>
      <div style={styles.feature}>
        <FaAward style={styles.icon} />
        <p style={styles.text}>ASSURED QUALITY</p>
      </div>
      <div style={styles.feature}>
        <FaCreditCard style={styles.icon} />
        <p style={styles.text}>SECURE PAYMENT</p>
      </div>
      <div style={styles.feature}>
        <FaShieldAlt style={styles.icon} />
        <p style={styles.text}>100% PURCHASE PROTECTION</p>
      </div>
      <div style={styles.feature}>
        <FaRupeeSign style={styles.icon} />
        <p style={styles.text}>BEST PRICE PROMISE</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
  },
  feature: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    fontSize: '50px',
    color: '#f28b66',
  },
  text: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#5a2d1a',
  },
};

export default Features;
