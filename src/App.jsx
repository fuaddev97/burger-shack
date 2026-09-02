import { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer'
import './App.css'
import RightTopImg from './assets/right-img.png'
import LeftTopImg from './assets/left-img.png'
import creativeLogo from './assets/burger-shack-creative-logo.png'
import TwoBurgers from './assets/two-burgers.png'
import TheLine from './assets/the-line.png'
import WithFries from './assets/with-fries.png'
import WholeMeal from './assets/whole-meal.png'
import CheddarBurger from './assets/cheddar-burger.png'
import BurgerOfTheDay from './assets/burger-otd.png'
import MakeYourOrder from './assets/make-your-order.png'
import Franchise from './assets/franchise.png'
import ArtCollectionOne from './assets/art-collection-one.png'
import ArtCollectionTwo from './assets/art-collection-two.png'
import GazetteImgOne from './assets/gazette-img-1.png'
import GazetteImgTwo from './assets/gazette-img-2.png'

function App() {
  const modelBurgerRef = useRef(null);
  const greenCurtainRef = useRef(null);
  const darkGreenCurtainCoverRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [introMoveUp, setIntroMoveUp] = useState(false);
  const [branchesVisible, setBranchesVisible] = useState(false);
  const [researchBtnVisible, setResearchBtnVisible] = useState(false);
  const [leftImgVisible, setLeftImgVisible] = useState(false);
  const [rightImgVisible, setRightImgVisible] = useState(false);
  const [creativeLogoVisible, setCreativeLogoVisible] = useState(false);
  const [twoBurgersVisible, setTwoBurgersVisible] = useState(false);
  const [withFriesVisible, setWithFriesVisible] = useState(false);
  const [wholeMealVisible, setWholeMealVisible] = useState(false);
  const [greenCurtainHidden, setGreenCurtainHidden] = useState(false);
  const [modelBurgerMoveUp, setModelBurgerMoveUp] = useState(false);
  const [storyTitleVisible, setStoryTitleVisible] = useState(false);
  const [darkGreenCurtainCover, setDarkGreenCurtainCover] = useState(false);
  const [makeYourOrderVisible, setMakeYourOrderVisible] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("All branches");
  const images = [LeftTopImg, RightTopImg, TwoBurgers, WithFries, WholeMeal];

  useEffect(() => {
    setTimeout ( () => {
      setBranchesVisible(true);
    }, 200);
    setTimeout ( () => {
      setResearchBtnVisible(true);
    }, 200);
    setTimeout ( () => {
      setWelcomeVisible(true);
    }, 400);
    setTimeout ( () => {
      setIntroMoveUp(true);
    }, 200);
    setTimeout ( () => {
      setLeftImgVisible(true);
    }, 200);
    setTimeout ( () => {
      setRightImgVisible(true);
    }, 400);
    setTimeout ( () => {
      setCreativeLogoVisible(true);
    }, 600);
    setTimeout ( () => {
      setTwoBurgersVisible(true);
    }, 800);
    setTimeout ( () => {
      setWithFriesVisible(true);
    }, 1000);
    setTimeout(() => {
      setWholeMealVisible(true);
    }, 1200);

  const greenCurtainObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        setTimeout(() => {
           setGreenCurtainHidden(true);
        }, 200);
    }
}, {
    threshold: 0.2
});

    greenCurtainObserver.observe(greenCurtainRef.current);

  const modelBurgerObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        setTimeout(() => {
           setModelBurgerMoveUp(true);
        }, 200);
    }
}, {
    threshold: 0.1
});

    modelBurgerObserver.observe(greenCurtainRef.current);

  const darkGreenCurtainCoverObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        setTimeout(() => {
            setDarkGreenCurtainCover(true);
            setMakeYourOrderVisible(true);
        }, 110);
        setTimeout(()=> {
          setStoryTitleVisible(true);
        }, 1200)
    }
}, {
    threshold: 0.5
});

    darkGreenCurtainCoverObserver.observe(darkGreenCurtainCoverRef.current);

    return () => {
    greenCurtainObserver.disconnect();
    modelBurgerObserver.disconnect();
    darkGreenCurtainCoverObserver.disconnect();
};
  }, []);
  return (
    <>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <Sidebar sidebarOpen={sidebarOpen}/>
      <div className='top-content'>
        <div className={`left-img ${leftImgVisible ? "left-img-visible" : ""}`}><img src={LeftTopImg} alt="left-top-image"/></div>
      <div className={`intro ${introMoveUp ? "intro-move-up" : ""}`}>
      <h1 className={`welcome ${welcomeVisible ? "welcome-visible" : ""}`}>Welcome to Burger Shack</h1>
      <div className="research-branches">
        <div className="select-wrapper">
        <div name="branches" className={`branches ${branchesVisible ? "branches-visible" : ""}`} onClick={() => setIsHidden(!isHidden)}>{selectedBranch} <span>▼</span>
         <div className={`branch-list ${isHidden ? "hidden" : ""}`}>
            <div className="all-branches" onClick={(e) => {
              setSelectedBranch("All branches");
              }}>All branches</div>
            <div className="bole-branch" onClick={(e) => {
              setSelectedBranch("Bole Branch");
            }}>Bole Branch</div>
            <div className="meri-luke-branch" onClick={(e) => {
              setSelectedBranch("Meri Luke Branch");
            }}>Meri Luke Branch</div> 
          </div>
          </div>
        </div>
        <button className={`research-btn ${researchBtnVisible ? "research-btn-visible" : ""}`}>Research</button>
      </div>
      </div>
      <div className={`right-img ${rightImgVisible ? "right-img-visible" : ""}`}><img src={RightTopImg} alt='right-top-img'/></div>
      </div>


    {/* For Mobile Devices Only */}
      <div className="slider">
        <div className="slider-track">
          {images.map((image, index) => (
            <img key={`first-${index}`} src={image} alt=""/>
          ))}
          {images.map((image, index) => (
            <img key={`second-${index}`} src={image} alt=""/>
          ))}
        </div>
      </div>
    {/*----------------------------*/}

    
      <div className='second-content'>
        <img src={creativeLogo} alt="creative-logo" className={`creative-logo ${creativeLogoVisible ? "creative-logo-visible" : ""}`}/>
        <div className={`two-burgers ${twoBurgersVisible ? "two-burgers-visible" : ""}`}>
          <img src={TwoBurgers} alt="two-burgers"/>  
          <img src={TheLine} alt="the-line" className="the-line"/>
        </div>
      </div>
      <div className="third-content">
        <img src={WithFries} alt="with-fries" className={`with-fries ${withFriesVisible ? "with-fries-visible" : ""}`}/>
        <div className={`whole-meal ${wholeMealVisible ? "whole-meal-visible" : ""}`}><img src={WholeMeal} alt="whole-meal"/></div>
      </div>
      <div className="fourth-content">
        <div className={`model-burger ${modelBurgerMoveUp ? "model-burger-move-up" : ""}`} ref={modelBurgerRef}>
          <div className="cheddar-burger-img"><span className={`green-curtain ${greenCurtainHidden ? "green-curtain-hidden" : ""}`} ref={greenCurtainRef}></span><img src={CheddarBurger} alt="cheddar-burger"/></div>
          <div className="cheddar-burger-info">
            <div className="upper-squares">
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
            <div className="info-content">
              <img src={BurgerOfTheDay} alt="burger-of-the-day" className="burger-of-the-day"/>
              <p className='recipe'>CHEDDAR BURGER: Beef patty, Cheddar cheese ketchup, mustard sauce lettuce, tomato slices and onion ring</p>
              <div className="two-buttons">
                <button className="view-map">View the full map</button>
                <button className="order-rest">Order in restaurant</button>  
              </div>
            </div>
            <div className="lower-squares">
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="fifth-content">
        <h1 className={`story-title ${storyTitleVisible ? "story-title-visible" : ""}`}>
          The story
          <span>of</span>
          <strong>Burger Shack</strong>
        </h1>
        <div className='make-your-order-container'><span className={`dark-green-curtain-hidden ${darkGreenCurtainCover ? "dark-green-curtain-cover" : ""}`} ref={darkGreenCurtainCoverRef}></span><img src={MakeYourOrder} alt="make-your-order" className={`make-your-order ${makeYourOrderVisible ? "make-your-order-visible" : ""}`}/></div>
        <p className="story-content">At Burger Shack, there’s the atmosphere of a family meal, with no fuss or pretension. You feel at home, and you eat well. We talk loudly, with our mouths full and our elbows resting on the table. And no one ever loses their temper—except for their delicious burgers, because they can also be enjoyed at home :)</p>
        <button className="learn-more">Learn more about Burger Shack</button>
      </div>
      <div className="sixth-content">
        
          <img src={Franchise} alt="franchise" className="franchise"/>
          <img src={ArtCollectionOne} alt="art-collection" className="art-collection-one"/>
        <div className="pink-background">
          <h2 className="follow-dreams">I WILL FOLLOW THE TASTE OF MY DREAMS</h2>
          <p className="contact-us">Burger Shack wants to welcome you everywhere. If you love the franchise, don’t hesitate to contact us.</p>
          <button className="learn-about-franchise">Learn more about the franchise</button>
        </div>
        <img src={ArtCollectionTwo} alt="art-collection-two" className='art-collection-two' />
      </div>
      <div className="seventh-content">
        <div className="newspaper-wrapper">
        <div className="newspaper">
          <h2 className="newspaper-heading">- The Burger Shack Gazette -</h2>
          <button className="latest-news">See the latest news</button>
          <div className='gazette-imgs'>
            <div className='gazette-one'>
            <img src={GazetteImgOne} alt="gazette-img-one" className='gazette-img-one'/>
            <p><span className="small-screen-date">December 10, 2025</span>BURGER SHACK CREATES A STIR — Locals Flock In for Today’s Juiciest News</p>
            </div>
            <div className="gazette-two">
            <img src={GazetteImgTwo} alt="gazette-img-two" className="gazette-img-two"/>
            <p><span className="small-screen-date">January 15, 2026</span>ANOTHER BURGER DISAPPEARS — Witnesses Blame Unstoppable Appetite</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
      
    </>
  )
}

export default App
