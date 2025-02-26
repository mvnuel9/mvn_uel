import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImg from '../../assets/profle.jpg';
import styles from './Loader.module.css';

function Loader() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/portfolio'); 
    }, 6000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <img
          src={profileImg}
          alt="Profil Koffi Luc-Emmanuel"
          className={styles.profilePicture}
        />
        <h1 className={styles.name}>
          KOFFI<br className={styles.mobileBreak} />
          LUC-EMMANUEL
        </h1>
        <h3 className={styles.title}>Développeur Fullstack Junior</h3>

        <div className={styles.loader}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>

      <footer className={styles.footer}>© Mvnuel. 2025. All rights reserved.</footer>
    </div>
  );
}

export default Loader;