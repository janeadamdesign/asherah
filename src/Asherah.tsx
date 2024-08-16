// Package imports
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import React, {useEffect} from "react";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";

// Local imports
import "./Asherah.css";
import Gallery from "./Gallery";
import Reservations from "./Reservations";
import {
  copyWrite,
  navlinks,
  Navlink,
  Navlinks,
  menuLinks,
  MenuSection,
  MenuEntry,
  menuContent,
} from "./asherahTextFields";

interface AsherahProps {
  // const props
  titleOpacity: number;
  titleMargin: number;
  welcomeThreeOpacity: number;
  page: string;
  headerColour: string;
  dotColour: string;
  dotFill: number;
  gallery: { src: string; title: string }[];
  // ref props
  copyRef: React.RefObject<HTMLDivElement | null>;
  plate2Ref: React.RefObject<HTMLDivElement | null>;
  treeRef: React.RefObject<HTMLImageElement | null>;
  hammonRef: React.RefObject<HTMLImageElement | null>;
  parallaxRef: React.RefObject<IParallax | null>;
  appetiserPaneRef: React.RefObject<HTMLDivElement | null>;
  entreePaneRef: React.RefObject<HTMLDivElement | null>;
  dessertPaneRef: React.RefObject<HTMLDivElement | null>;
  drinksPaneRef: React.RefObject<HTMLDivElement | null>;
  //function refs
  handleClick: (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLImageElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => void;
  setAppetiserRef: (index: number) => (element: HTMLElement | null) => void;
  setMenuTitleRef: (index: number) => (element: HTMLElement | null) => void;
  dotNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  // gallery props (mixed)
  lightboxOpen: boolean;
  clickOnImage: (index: number) => void;
  closeLightbox: () => void;
  imageIndex: number;
}

function Asherah(props: AsherahProps): React.ReactElement {
  // modular header
  const header = (page: string): JSX.Element => {
    const content: JSX.Element = (
      <>
        <img
          id="logo"
          src="/asherahlogo.png"
          alt="logo"
          onClick={props.handleClick}
        />
        <nav id="main-nav">{injectNavlinks(navlinks)}</nav>
      </>
    );
    let displayStyle: { display: string } | null = null;
    if (page === "history") {
      displayStyle = {
        display: props.page === page ? "flex" : "none",
      };
    } else {
      displayStyle = {
        display: props.page !== "history" ? "flex" : "none",
      };
    }
    return (
      <header className={props.headerColour} style={{ ...displayStyle }}>
        {" "}
        {content}
      </header>
    );
  };

  // JSX Injectors
  const injectedTextFields: JSX.Element[] = Object.values(copyWrite).map(
    (copyField: string): JSX.Element => {
      return <p className="copy">{copyField}</p>;
    }
  );
  const injectNavlinks = (navFields: Navlinks): JSX.Element[] => {
    return Object.values(navFields).map((navFields: Navlink): JSX.Element => {
      return (
        <a id={navFields.id} className="navlink" onClick={props.handleClick}>
          {navFields.content}
        </a>
      );
    });
  };
  const injectMenuLinks = (menuFields: Navlinks): JSX.Element[] => {
    return Object.values(menuFields).map(
      (menuField: Navlink, index: number): JSX.Element => {
        return (
          <li className={props.dotFill === index + 1 ? "fill" : ""}>
            <a id={menuField.id} onClick={props.dotNavClick}>
              {menuField.content}
            </a>
          </li>
        );
      }
    );
  };
  const injectMenuEntries = (menuSection: MenuSection): JSX.Element[] => {
    return Object.values(menuSection).map(
      (menuEntry: MenuEntry, index: number): JSX.Element => {
        let reference: number = 0;
        switch (menuSection) {
          case menuContent.appetisers:
            reference = index + 1;
            break;
          case menuContent.entrees:
            reference = index + 10;
            break;
          case menuContent.sweets:
            reference = index + 19;
            break;
          case menuContent.drinks:
            reference = index + 28;
            break;
        }
        return (
          <div
            className="menu-grid-item"
            ref={props.setAppetiserRef(reference)}
          >
            <h3>
              {menuEntry.title} <span>£{menuEntry.price} </span>
            </h3>{" "}
            <p className="break">&nbsp;</p>
            <p>{menuEntry.copy}</p>
          </div>
        );
      }
    );
  };

  // scroll to top on refresh
  useEffect((): (() => void) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const scrollUpTimer: NodeJS.Timeout | number = setTimeout((): void => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 100);
    return (): void => {
      clearTimeout(scrollUpTimer);
    };
  }, []);

  return (
    <div id="app">
      {header("home")}
      <section
        id="home-section"
        className={
          props.page === "home" ? "section-visible" : "section-invisible"
        }
      >
        <div className="background-container" id="spice1">
          <div
            id="welcome-text"
            style={{
              opacity: props.titleOpacity,
              display: props.page === "gallery" ? "none" : "inherit",
            }}
          >
            <h1 style={{ marginBottom: `${props.titleMargin}rem` }}>Asherah</h1>
            <h2 style={{ marginTop: `${props.titleMargin}rem` }}>
              Mediterranean Restaurant
            </h2>
          </div>
        </div>
        <div className="bottom-text" id="contact-opening">
          <div
            className="welcome-three"
            style={{ opacity: props.welcomeThreeOpacity }}
          >
            <span id="contact" className="welcome-span">
              <h2 className="bottom-title">Contact</h2>
              <span id="contact-span">
                <p>47 Green Lanes</p>
                <p>Unit 2, Willow House</p>
                <p>Haringey, N16 9BU</p>
                <p className="break">&nbsp;</p>
                <p>+ 44 ( 0) 207 603 32 41 </p>
                <a
                  className="bottom-link"
                  id="email-link"
                  href="mailto:ash.asher.ashah@gmail.com"
                >
                  <p id="email-text">ash.asher.ashah@gmail.com</p>
                </a>
                <p className="break">&nbsp;</p>
                <a
                  className="bottom-link"
                  id="reservation-make"
                  onClick={props.handleClick}
                >
                  {" "}
                  <p className="underline">
                    <em>make a reservation</em>
                  </p>
                </a>
              </span>
            </span>
            <span id="hours" className="welcome-span">
              <h2 className="bottom-title">Opening Hours</h2>
              <p>Tues-Sat</p>
              <p className="break">&nbsp;</p>
              <p className="lunch-dinner">
                <em>Lunch:</em>
                12:00—3:00pm
              </p>
              <p className="lunch-dinner">
                <em>Dinner:</em>
                6:00pm—10:00pm
              </p>
              <p className="break">&nbsp;</p>
              <p className="lunch-dinner">
                <span id="sunday">Sunday:</span> 12:00—6:00pm
              </p>
              <p className="break">&nbsp;</p>
              <p className="lunch-dinner">
                Monday:
                <em> Closed</em>
              </p>
            </span>
          </div>
        </div>
        <div className="background-container" id="spice2"></div>
      </section>
      <section
        id="history-section"
        className={
          props.page === "history" ? "section-visible" : "section-invisible"
        }
      >
        <Parallax
          pages={3}
          ref={props.parallaxRef as React.RefObject<IParallax>}
        >
          <ParallaxLayer offset={1} speed={2}>
            <div
              className="bottom-text"
              id="history-container"
              ref={props.copyRef as React.RefObject<HTMLDivElement>}
            >
              <ParallaxLayer className="width-limit" speed={0.75}>
                <span className="parallax-span">
                  <h2 className="bottom-title">Malqaria</h2>
                  <h2 className="bottom-title" id="hammon">
                    Hammon Ba'albek
                  </h2>
                </span>
              </ParallaxLayer>
              <ParallaxLayer className="width-limit" offset={0.1} speed={0.4}>
                <span className="parallax-span">
                  {injectedTextFields.slice(0, 2)}
                </span>
              </ParallaxLayer>
              <ParallaxLayer className="width-limit" offset={0.6} speed={0.15}>
                <span className="parallax-span">
                  <div className="copy-img-container">
                    <img
                      alt="tree"
                      id="tree"
                      src="/tree.jpeg"
                      className="copy-img"
                      ref={props.treeRef as React.RefObject<HTMLImageElement>}
                    />
                  </div>
                  <div className="copy-img-container">
                    <img
                      id="hammon"
                      src="/hammon.png"
                      className="copy-img"
                      ref={props.hammonRef as React.RefObject<HTMLImageElement>}
                    />
                  </div>
                </span>
              </ParallaxLayer>
              <ParallaxLayer className="width-limit" offset={1.4} speed={0.1}>
                <span className="parallax-span">
                  {" "}
                  {injectedTextFields.slice(2)}
                </span>
              </ParallaxLayer>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            {header("history")}

            <div className="background-container" id="plate1">
              {" "}
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <div
              className="background-container"
              id="plate2"
              ref={props.plate2Ref as React.RefObject<HTMLDivElement>}
            >
              {" "}
            </div>
          </ParallaxLayer>
        </Parallax>
      </section>
      <section
        id="menu-section"
        className={
          props.page === "menu" ? "section-visible" : "section-invisible"
        }
      >
        <div id="dot-nav-container">
          <div className="dotstyle">
            <ul id="dot-nav-ul" className={props.dotColour}>
              {injectMenuLinks(menuLinks)}
            </ul>
          </div>
        </div>
        <div
          className="menu-container"
          id="appetisers"
          ref={props.appetiserPaneRef as React.RefObject<HTMLDivElement>}
        >
          <div className="menu-grid">
            <div className="menu-grid-title">
              <h2 ref={props.setMenuTitleRef(0)}>Appetisers</h2>
            </div>
            {injectMenuEntries(menuContent.appetisers)}
          </div>
        </div>
        <div
          className="menu-container black-background"
          id="entrees"
          ref={props.entreePaneRef as React.RefObject<HTMLDivElement>}
        >
          <div className="menu-grid">
            <div className="menu-grid-title">
              <h2 ref={props.setMenuTitleRef(1)}>Entrées</h2>
            </div>
            {injectMenuEntries(menuContent.entrees)}
          </div>
        </div>
        <div
          className="menu-container"
          id="desserts"
          ref={props.dessertPaneRef as React.RefObject<HTMLDivElement>}
        >
          <div className="menu-grid">
            <div className="menu-grid-title">
              <h2 ref={props.setMenuTitleRef(2)}>Sweets</h2>
            </div>

            {injectMenuEntries(menuContent.sweets)}
          </div>
        </div>
        <div
          className="menu-container black-background"
          id="drinks"
          ref={props.drinksPaneRef as React.RefObject<HTMLDivElement>}
        >
          <div className="menu-grid">
            <div className="menu-grid-title">
              <h2 ref={props.setMenuTitleRef(3)}>To Drink?</h2>
            </div>
            {injectMenuEntries(menuContent.drinks)}
          </div>
        </div>
      </section>
      <section
        id="gallery-section"
        className={
          props.page === "gallery" ? "section-visible" : "section-invisible"
        }
      >
        <div className="black-background" id="gallery-container-container">
          <Lightbox
            open={props.lightboxOpen}
            close={() => props.closeLightbox()}
            slides={props.gallery}
            plugins={[Fullscreen, Thumbnails]}
            index={props.imageIndex}
          />
          <Gallery
            gallery={props.gallery}
            clickOnImage={props.clickOnImage}
            lightboxOpen={props.lightboxOpen}
          />
        </div>
      </section>
      <section
        id="reservations-section"
        className={
          props.page === "reservations"
            ? "section-visible"
            : "section-invisible"
        }
      >
        <Reservations page={props.page} handleClick={props.handleClick} />
      </section>
    </div>
  );
}

export default Asherah;
