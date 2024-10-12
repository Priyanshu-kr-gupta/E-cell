import "./Footer.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    // <div className="w-full h-[50vh] bg-zinc-800 flex justify-center items-center text-white">
    // <p>Footer</p>

    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-col">
              <h4>About us</h4>
              <p>
                CONTACT US
                <br /> Phone :{" "}
                <span>
                  <a href="tel:+917740929509,+917355797206">
                    8809257745,7359687206
                  </a>
                </span>
                <br /> Email : entrepreneurship@nitjsr.ac.in
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-col middle">
              <h4>Important Links</h4>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    Home{" "}
                    <a className="turquoise" href="index.html">
                      Here
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                  Upcoming events{" "}
                    <a className="turquoise" href="cap2.html">
                      Here
                    </a>
                  </div>
                </li>
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body">
                    Past events{" "}
                    <a className="turquoise" href="entreview.html">
                      Here
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-col last">
              <h4>Social Media</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.facebook.com/entrepreneurship.cell.nit.jsr/"
                  className="icons"
                  target="_blank"
                >
                  <FaSquareFacebook />
                </a>
                <a
                  href="https://x.com/ecell_nitjsr/"
                  className="icons"
                  target="_blank"
                >
                  <FaSquareTwitter />
                </a>
                <a
                  href="https://www.instagram.com/ecell.nitjsr/"
                  className="icons"
                  target="_blank"
                >
                  <FaSquareInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/e-cell-nit-jamshedpur1234/posts/?feedView=all"
                  className="icons"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
