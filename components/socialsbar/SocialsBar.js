import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Styles from './SocialsBar.module.css';

const ICON_SIZE = 36;
function SocialsBar() {
  return (
    <section className={Styles.socialsBar}>
      <a
        href="https://www.instagram.com/Science_n_Technical_committee/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a href="https://github.com/venv-developers" target="_blank" rel="noreferrer">
        <FaGithub className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a
        href="https://www.linkedin.com/company/science-technical-committee-of-pdeu/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
    </section>
  );
}

export default SocialsBar;
