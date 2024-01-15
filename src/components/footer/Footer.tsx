import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <ul className="column-footer">
          <li className="email-footer">
            <SiGooglemaps className="emailicon" />
            <p className="name-email">Jaco, Costa Rica.</p>
          </li>
          <li className="github-footer">
            <FaInstagram className="icongithub" title="GitHub." />
            <p className="name-github">
              <a href="https://github.com/jordanlaguna?tab=repositories">
                restaruantemichoza
              </a>
            </p>
          </li>
          <li className="linkedin-footer">
            <FaFacebook className="iconlinkedin" title="Linkedin." />
            <p className="name-linkedin">
              <a href="https://www.linkedin.com/in/jordan-laguna-rodríguez-893921274/">
                Restaurante Mi Choza.
              </a>
            </p>
          </li>
        </ul>
        <p className="tilte-footer">2024.</p>
      </footer>
    </>
  );
};
export default Footer;
