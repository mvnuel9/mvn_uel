import styles from './ProjectsStyles.module.css';
import danger from'../../assets/pictogramme-attention-rouge.webp';
import ProjectCard from '../../common/ProjectCard';
import toge from '../../assets/toge.jpg'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={toge}
          link="https://mvnuel9.github.io/Site-ecole/"
          h3="UIST"
          p="Site web école"
        />
        <ProjectCard
          src={danger}
          link="#"
          h3="Projet"
          p="Bientôt disponible !"
        />
        <ProjectCard
          src={danger}
          link="#"
          h3="Projet"
          p="Bientôt disponible !"
        />
        <ProjectCard
          src={danger}
          link="#"
          h3="Projet"
          p="Bientôt disponible !"
        />
      </div>
    </section>
  );
}

export default Projects;
