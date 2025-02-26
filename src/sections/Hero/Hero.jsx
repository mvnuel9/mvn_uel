import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profle.jpg';
import sun from '../../assets/on.svg';
import moon from '../../assets/off.svg';
import tiktokLight from '../../assets/tiktok-light.svg';
import tiktokDark from '../../assets/tiktok-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import snapLight from '../../assets/snap-light.svg';
import snapDark from '../../assets/snap-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const tiktokIcon = theme === 'light' ? tiktokLight : tiktokDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const snapIcon = theme === 'light' ? snapLight : snapDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          KOFFI
          <br />
          LUCK-EMMANUEL
        </h1>
        <h2 className={styles.typingAnimation}>Développeur Fullstack Junior</h2>
        <span>
          <a href="https://www.tiktok.com/@mvn_uel?_t=ZM-8uANu5rz6O7&_r=1" target="_blank">
            <img src={tiktokIcon} alt="Tiktok icon" />
          </a>
          <a href="https://github.com/mvnuel9" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.snapchat.com/add/mvn_uel9?share_id=fWAwUzSFUNE&locale=fr-FR" target="_blank">
            <img src={snapIcon} alt="Snapchat icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionné par la création d’applications web et mobiles innovantes, 
          des jeux vidéos et des nouvelles technologies.
        </p>
        <a href={CV} download>
          <button className="hover">Télécharger CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
