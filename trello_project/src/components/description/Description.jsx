import React from "react";
import styles from "./description.css";

const Description = () => {
  return (
    <div style={styles.Container}>
      <div style={styles.titleSection}>
        <h1>title</h1>
      </div>

      <div style={styles.DescriptionSection}>
        <h2>Description</h2>
      </div>

      <div style={styles.ActivitySection}>
        <h2>Activity</h2>
      </div>
    </div>
  );
};

export default Description;
