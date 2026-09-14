import './Footer.css'
import BackToTop from './BackToTop'
import BSBricks from './assets/bs-bricks.jpg'

function Footer() {
    return(
        <footer>
        <div className="light-green">
            <nav className="about-the-resturant">
                
                    <a href="#" className="welcome-link">Welcome</a>
                    <a href="#" className="story-link">The story of Burger Shack</a>
                    <a href="#" className="news">News</a>
                
                    <a href="#" className="the-map">The map</a>
                    <a href="#" className="franchise-link">The franchise</a>
                    <a href="#" className="contact">Contact</a>
                    
                    <a href="#" className="resturants">Resturants</a>
                    <a href="#" className="recruitment">Recruitment</a>
                    <a href="#" className="credits">Credits</a>

            </nav>
            <div className="social-media">
                <p className="follow-us">Follow us on social media</p>
                <div className="icons">
                <div className="face">
                 <a href="#" className="facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                </div>
                <div className="insta">
                <a href="#" className="instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                </div>
                <div className="tik">
                <a href="#" className="tiktok">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                </div>
                <div className="linked">
                <a href="#" className="linkedin">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                </div>
                </div>
            </div>
        </div>

       <div className="dark-green">
            <div className="legality">
                    <a href="#" className="notice">Legal notice</a>
                    <a href="#" className="privacy">Privacy Policy</a>
            </div>
            <img src={BSBricks} alt="burger-shack-bricks" className="burger-shack-bricks"/>
            <div className="est-date">
                <p className="date">Burger Shack © 2026</p>
              <BackToTop />
            </div>
        </div>
        </footer>
    );
}

export default Footer