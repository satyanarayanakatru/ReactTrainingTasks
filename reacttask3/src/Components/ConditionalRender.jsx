import React from "react";
import styles from "./ConditionalRender.module.css";

function ConditionalRender() {
  const clickMe = () => {
    const para = document.querySelector(`.${styles.para}`);

    if (para.style.display === "none") {
      para.style.display = "block";
    } else {
      para.style.display = "none";
    }
  };

  const user = true;
  const checkin = true;
  const name = "Satyanarayana";

  return (
    <div className={styles.card}>
      <h1>Conditional Rendering</h1>

      <button onClick={clickMe}>Click Me</button>

      <p className={styles.para} style={{ display: "none" }}>
        Hii, This is React.js using Conditional Rendering
      </p>

      {user ? (
        <p className={styles.success}>Login Successful, Hello {name}</p>
      ) : (
        <p className={styles.error}>Please Login</p>
      )}

      {checkin && (
        <p className={styles.info}>
          You have checked in today. Please don't forget to checkout at the end
          of the day.
        </p>
      )}
    </div>
  );
}

export default ConditionalRender;
