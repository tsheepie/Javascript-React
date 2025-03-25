/* PostCard.js */

import React from "react";
import travel from "./la-so-vk4vjTNVrTg-unsplash.jpg";
import styles from "./PostCard.module.css"

/* let imageSrc =
  "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; */

function PostCard() {
  return (
    <div className={styles.card}>
      {/* <img src={imageSrc} alt="a desk" style={styles.image} /> */}
      <img src={travel} alt="desk" className={styles.image} />
      <div className={styles.content}>
        <p className={styles.date}>4 days ago</p>
        <p className={styles.title}>Post One</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eaque
          temporibus atque facilis, commodi voluptas quisquam ab tenetur
          obcaecati nisi.
        </p>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <p className={styles.footerValue}>
            4 <sup>m</sup>
          </p>
          <p className={styles.footerLabel}>READ</p>
        </div>
        <div className={styles.footerItem}>
          <p className={styles.footerValue}>5132</p>
          <p className={styles.footerLabel}>VIEWS</p>
        </div>
        <div className={styles.footerItem}>
          <p className={styles.footerValue}>4</p>
          <p className={styles.footerLabel}>COMMENTS</p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;