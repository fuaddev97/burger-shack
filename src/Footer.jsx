import './Footer.css'
import BSBricks from './assets/bs-bricks.png'

function Footer() {
    return(
        <>
        <div className="light-green">
            <div className="about-the-resturant">
                
                    <a href="#" className="welcome-link">Welcome</a>
                    <a href="#" className="story-link">The story of Burger Shack</a>
                    <a href="#" className="news">News</a>
                
                    <a href="#" className="the-map">The map</a>
                    <a href="#" className="franchise-link">The franchise</a>
                    <a href="#" className="contact">Contact</a>
                    
                    <a href="#" className="resturants">Resturants</a>
                    <a href="#" className="recruitment">Recruitment</a>
                    <a href="#" className="credits">Credits</a>

            </div>
            <div className="social-media">
                <p className="follow-us">Follow us on social media</p>
                <div class="icons">
                <div class="face">
                 <a href="#" class="facebook">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                </div>
                <div class="insta">
                <a href="#" class="instagram">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                </div>
                <div class="tik">
                <a href="#" class="tiktok">
                  <i class="fa-brands fa-tiktok"></i>
                </a>
                </div>
                <div class="linked">
                <a href="#" class="linkedin">
                  <i class="fa-brands fa-linkedin-in"></i>
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
                <button className="back-to-top"><span><i class="fa-solid fa-arrow-up"></i></span>Back to top</button>
            </div>
            <img src={BSBricks} alt="burger-shack-bricks" className="burger-shack-bricks-responsive"/>
        </div>
        </>
    );
}

export default Footer