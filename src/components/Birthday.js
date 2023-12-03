// Birthday.js
import React, { useEffect, useState } from 'react';
import birthdayData from '../data/Data';
import * as styles from '../styles/Style';

const Birthday = () => {
  const [bData, setBData] = useState([]);

  const fetchData = () => {
    setBData(birthdayData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clearData = () => {
    setBData([]);
  };

  return (
    <div style={styles.container}>
      <h1>Birthdays</h1>
      {bData.length > 0 ? (
        bData.map((person) => (
          <div key={person.id} style={styles.card}>
            <div style={styles.imageContainer}>
              <img src={person.image} alt={person.name} style={styles.image} />
            </div>
            <div style={styles.textContainer}>
              <h3 style={styles.name}>{person.name}</h3>
              <p style={styles.age}>Age: {person.age}</p>
            </div>
          </div>
        ))
      ) : (
        <p style={styles.noBirthdays}>0 birthdays today</p>
      )}
      <button onClick={clearData} style={styles.clearButton}>
        Clear All
      </button>
    </div>
  );
};

export default Birthday;
