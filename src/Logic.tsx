// Package imports
import throttle from "lodash.throttle";
import React, { useEffect, useState, useRef } from "react";
import { IParallax } from "@react-spring/parallax";

// Local imports
import Asherah from "./Asherah";
import AsherahMobile from "./AsherahMobile";

function Logic(): React.ReactElement {
  // All useEffect hooks are grouped towards end of document rather than immediately below their respective logics

  // rootFontSize constant - used occasionally throughout - declared at start for clarity
  const rootFontSize: number = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

  // Navigational-Presentational Logic for Page Changes
  const [page, setPage] = useState<string>("home");
  const handleClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLImageElement>
      | React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    console.log("handleClick fn active");
    const target: HTMLAnchorElement | HTMLImageElement = e.currentTarget as
      | HTMLAnchorElement
      | HTMLImageElement;
    console.log(`target: ${target}`);
    console.log(`target id: ${target.id || "no target id"}`);
    switch (target.id) {
      case "confirmation-home":
      case "logo":
      case "home":
        window.scrollTo(0, 0);
        setPage("home");
        break;
      case "history":
        window.scrollTo(0, 0);
        setPage("history");
        break;
      case "eat":
        if (page === "menu") {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          window.scrollTo(0, 0);
          setPage("menu");
        }
        break;
      case "drink":
        if (page === "menu" && drinksPaneRef.current) {
          window.scrollTo({
            top: drinksPaneRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
          });
        } else {
          window.scrollTo(0, 0);
          setPage("menu");
          setTimeout(() => {
            if (!drinksPaneRef.current) return;
            window.scrollTo({
              top: drinksPaneRef.current.offsetTop,
              left: 0,
              behavior: "smooth",
            });
          }, 200); // Refactor timeout into useEffect at some point
        }
        break;
      case "gallery":
        window.scrollTo(0, 0);
        setPage("gallery");
        break;
      case "reservations":
      case "reservation-make":
        window.scrollTo(0, 0);
        setPage("reservations");
        break;
    }
  };

  /* OUR CODE:
    1. Storing document scrollPosition as state:
    - setState declared for scrollPositionY to store scroll position as state
    - fn defined to setScrollPositionY according to window.scrollY, with a fallback for older browsers using HTML scroll methods described above on documentElement. */
  const [scrollPositionY, setScrollPositionY] = useState<number>(0);
  const handleScrollY = throttle((): void => {
    //console.log("inside handleScrollY");
    if (page === "history") {
      getParallaxOffset();
    } else {
      setScrollPositionY(window.scrollY || document.documentElement.scrollTop);
    }
  }, 15);

  /* 2. State declarations for opacity & margin constants responsive to scroll for page: home:
  -  titleOpacity, titleMargin, and welcomeThreeOpacity set as state
  - fn opacityCalculator produces const ratio which is double value of scroll position / viewport height. Ratio is used to calculate and set state for the title opacity and title margin. 
    - internal function welcomeThreeCalc calculates and setsState for a fade in / fade out of the contact details / opening hours on page: home
  */
  const [titleOpacity, setTitleOpacity] = useState<number>(1);
  const [titleMargin, setTitleMargin] = useState<number>(0);
  const [welcomeThreeOpacity, setWelcomeThreeOpacity] = useState<number>(0);
  const opacityCalculator = (): void => {
    const ratio: number =
      ((window.scrollY || document.documentElement.scrollTop) /
        window.innerHeight) *
      2;
    // console.log(`ratio: ${ratio}`);
    const opacityConstant: number = Math.min(0.95, Math.max(1 - ratio, 0));
    const marginConstant: number = Math.max(2, ratio * 25);
    // console.log(`marginConstant: ${marginConstant}`);
    // console.log(`opacityConstant: ${opacityConstant}`);
    setTitleOpacity(opacityConstant);
    setTitleMargin(marginConstant);
    const welcomeThreeCalc = (): void => {
      let opacity: number = 1;
      if (
        window.scrollY < window.innerHeight ||
        document.documentElement.scrollTop < window.innerHeight
      ) {
        opacity = ratio;
      } else if (
        window.scrollY >=
          window.innerHeight +
            Math.min(0.4 * window.innerHeight, 30 * rootFontSize) ||
        document.documentElement.scrollTop >=
          window.innerHeight +
            Math.min(0.4 * window.innerHeight, 30 * rootFontSize)
      ) {
        opacity = 0;
      } else {
        const calculon1: number = window.scrollY - window.innerHeight;
        const calculon2: number = Math.min(
          0.4 * window.innerHeight,
          30 * rootFontSize
        );
        const dissolveRatio: number = calculon1 / calculon2;
        // console.log(`dissolveRatio: ${dissolveRatio}`);
        opacity = 1 - dissolveRatio;
      }
      setWelcomeThreeOpacity(opacity);
    };
    welcomeThreeCalc();
  };

  // Menu Grid Opacity Control for page: menu
  const appetiserItemRefs: React.RefObject<Array<HTMLElement | null>> = useRef(
    Array(36).fill(null)
  );
  const setAppetiserRef =
    (index: number) =>
    (element: HTMLElement | null): void => {
      if (appetiserItemRefs.current) {
        appetiserItemRefs.current[index] = element;
      }
    };
  const menuTitleRefs: React.RefObject<Array<HTMLElement | null>> = useRef(
    Array(4).fill(null)
  );
  const setMenuTitleRef =
    (index: number) =>
    (element: HTMLElement | null): void => {
      if (menuTitleRefs.current) {
        menuTitleRefs.current[index] = element;
      }
    };
  const elementDissolveModule = (element: HTMLElement) => {
    const bounds: DOMRect = element.getBoundingClientRect();
    const top: number = bounds.top;
    const fadeConstant: number = 9.5 * rootFontSize;
    const endFadeConstant: number = 5.5 * rootFontSize;
    const delta: number = fadeConstant - endFadeConstant;
    if (top > fadeConstant) {
      element.style.opacity = "1";
    } else if (top <= endFadeConstant) {
      element.style.opacity = "0";
    } else {
      const calculatedOpacity: number = (top - endFadeConstant) / delta;
      element.style.opacity = calculatedOpacity.toString();
    }
  };
  const menuDissolve = (): void => {
    if (!appetiserItemRefs.current || !menuTitleRefs.current) return;
    appetiserItemRefs.current.forEach((element) => {
      if (element) {
        elementDissolveModule(element);
      }
    });
    menuTitleRefs.current.forEach((element) => {
      if (element) {
        elementDissolveModule(element);
      }
    });
  };

  // Header Text Colour State & Setter Function
  const [headerColour, setHeaderColour] = useState<string>("normal");
  const appetiserPaneRef: React.RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const entreePaneRef: React.RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const dessertPaneRef: React.RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const drinksPaneRef: React.RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const headerConstant: number = 6 * rootFontSize;
  const menuHeaderCheck = (): void => {
    if (
      !(
        appetiserPaneRef.current &&
        entreePaneRef.current &&
        dessertPaneRef.current &&
        drinksPaneRef.current
      )
    )
      return;
    if (
      scrollPositionY < entreePaneRef.current.offsetTop - headerConstant ||
      (scrollPositionY >= dessertPaneRef.current.offsetTop - headerConstant &&
        scrollPositionY <= drinksPaneRef.current.offsetTop - headerConstant)
    ) {
      setHeaderColour("black");
    } else setHeaderColour("white-on-black");
  };

  const headerColourFunction = (): void => {
    // console.log("HCF running");
    switch (page) {
      case "home":
        setHeaderColour("normal");
        break;
      case "history":
        setHeaderColour("normal");
        break;
      case "gallery":
        setHeaderColour("white-on-black");
        break;
      case "reservations":
        setHeaderColour("black-normal");
        break;
      case "menu":
        menuHeaderCheck();
        break;
    }
  };

  // DotNav Colour State & Setter Function
  const [dotColour, setDotColour] = useState<string>("black-dots");
  const dotColourFunction = (): void => {
    if (
      !(
        appetiserPaneRef.current &&
        entreePaneRef.current &&
        dessertPaneRef.current &&
        drinksPaneRef.current
      )
    )
      return;
    if (
      scrollPositionY <
        entreePaneRef.current.offsetTop - window.innerHeight / 2 ||
      (scrollPositionY >=
        dessertPaneRef.current.offsetTop - window.innerHeight / 2 &&
        scrollPositionY <=
          drinksPaneRef.current.offsetTop - window.innerHeight / 2)
    ) {
      setDotColour("black-dots");
    } else setDotColour("white-dots");
  };

  const [dotFill, setDotFill] = useState<number>(1);
  const dotFillFunction = (): void => {
    if (
      !(
        appetiserPaneRef.current &&
        entreePaneRef.current &&
        dessertPaneRef.current &&
        drinksPaneRef.current
      )
    )
      return;
    if (
      scrollPositionY <
      entreePaneRef.current.offsetTop - window.innerHeight / 2
    ) {
      setDotFill(1);
    } else if (
      scrollPositionY >
        entreePaneRef.current.offsetTop - window.innerHeight / 2 &&
      scrollPositionY <
        dessertPaneRef.current.offsetTop - window.innerHeight / 2
    ) {
      setDotFill(2);
    } else if (
      scrollPositionY >=
        dessertPaneRef.current.offsetTop - window.innerHeight / 2 &&
      scrollPositionY <=
        drinksPaneRef.current.offsetTop - window.innerHeight / 2
    ) {
      setDotFill(3);
    } else setDotFill(4);
  };

  //Dot-Nav Click Handling
  const dotNavClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    if (
      !(
        appetiserPaneRef.current &&
        entreePaneRef.current &&
        dessertPaneRef.current &&
        drinksPaneRef.current
      )
    )
      return;
    const target: HTMLElement = e.currentTarget as HTMLElement;
    switch (target.id) {
      case "appetisers-link":
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        break;
      case "entrees-link":
        window.scrollTo({
          top: entreePaneRef.current.offsetTop,
          left: 0,
          behavior: "smooth",
        });
        break;
      case "desserts-link":
        window.scrollTo({
          top: dessertPaneRef.current.offsetTop,
          left: 0,
          behavior: "smooth",
        });
        break;
      case "drinks-link":
        window.scrollTo({
          top: drinksPaneRef.current.offsetTop,
          left: 0,
          behavior: "smooth",
        });
        break;
    }
  };

  /* Gallery logic 
  - declare state for lightboxOpen & imageIndex
  - state setter fns for closing the lightbox and opening the lightbox at a given index 
  */
  const gallery: { src: string; title: string }[] = [
    {
      src: "/ocakbasi/mangal1.jpg",
      title: "Mangal 1",
    },
    {
      src: "/ocakbasi/mangal2.jpg",
      title: "Mangal 2",
    },
    {
      src: "/ocakbasi/mangal3.jpg",
      title: "Mangal 3",
    },
    {
      src: "/ocakbasi/mangal4.jpg",
      title: "Mangal 4",
    },
    {
      src: "/ocakbasi/mangal5.jpg",
      title: "Mangal 5",
    },
    {
      src: "/ocakbasi/mangal6.jpg",
      title: "Mangal 6",
    },
    {
      src: "/ocakbasi/mangal7.jpg",
      title: "Mangal 7",
    },
    {
      src: "/ocakbasi/mangal8.jpg",
      title: "Mangal 8",
    },
    {
      src: "/ocakbasi/mangal9.jpg",
      title: "Mangal 9",
    },
  ];
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const clickOnImage = (index: number): void => {
    setImageIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = (): void => {
    setLightboxOpen(false);
  };

  // copy image logic

  const copyRef: React.RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const plate2Ref: React.RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const treeRef: React.RefObject<HTMLImageElement | null> =
    useRef<HTMLImageElement>(null);
  const hammonRef: React.RefObject<HTMLImageElement | null> =
    useRef<HTMLImageElement>(null);

  const parallaxRef: React.RefObject<IParallax | null> =
    useRef<IParallax>(null);

  const getParallaxOffset = (): void => {
    console.log(`inside the parallax function`);
    if (parallaxRef.current) {
      const parallaxValues: { offset: number; space: number; current: number } =
        {
          offset: parallaxRef.current.offset,
          space: parallaxRef.current.space,
          current: parallaxRef.current.current,
        };
      zoomScroll(parallaxValues);
    }
  };

  const zoomScroll = (parallaxValues: {
    offset: number;
    space: number;
    current: number;
  }): void => {
    const finalZoom: number = 1.2;
    const section2Offset: number = parallaxValues.space;
    const section3Offset: number = parallaxValues.space * 2;
    const current: number = parallaxValues.current;
    const sectionDelta: number = section3Offset - section2Offset;
    const scrollDelta: number = current - section2Offset;
    if (scrollDelta >= 0 && scrollDelta <= sectionDelta) {
      const zoomConstant: number = scrollDelta / sectionDelta;
      const zoom: number = 1 + (finalZoom - 1) * zoomConstant;
      if (treeRef.current && hammonRef.current) {
        treeRef.current.style.transform = `scale(${zoom})`;
        hammonRef.current.style.transform = `scale(${zoom})`;
      }
    }
  };

  /* responsive useEffect hooks
1. scrollPositionY dependency: logs scroll position, runs opacityCalculator state setter fn, runs headerColourFunction state setter
2. page dependency: runs headerColourFunctio state setter, add and remove event listener for user input 'scroll'; cleanup on unmount  */

  useEffect(() => {
    headerColourFunction();
    window.addEventListener("scroll", handleScrollY);
    if (page === "history") {
      console.log(`page set to history`);
      if (parallaxRef.current?.container) {
        const containerElement: HTMLDivElement =
          parallaxRef.current.container.current;
        if (containerElement) {
          containerElement.addEventListener("scroll", getParallaxOffset);
        }
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScrollY);
      if (page === "history") {
        console.log(`page set to history`);
        if (parallaxRef.current?.container) {
          const containerElement: HTMLDivElement =
            parallaxRef.current.container.current;
          if (containerElement) {
            containerElement.removeEventListener("scroll", getParallaxOffset);
          }
        }
      }
    };
  }, [page]);
  useEffect(() => {
    //console.log(`Scroll position is: ${scrollPositionY}`);
    opacityCalculator();
    headerColourFunction();
    menuDissolve();
    dotColourFunction();
    dotFillFunction();
    console.log(
      `window width: ${window.innerWidth}, window height: ${window.innerHeight}`
    );
  }, [scrollPositionY]);

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
    }, 50);
    return (): void => {
      clearTimeout(scrollUpTimer);
    };
  }, []);

  // Code for conditional rendering of mobile version
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const checkViewport = (): void => {
    setIsMobile(window.innerWidth < 850);
  };
  useEffect((): (() => void) => {
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return (): void => {
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  return !isMobile ? (
    <Asherah
      // Const props
      titleOpacity={titleOpacity}
      titleMargin={titleMargin}
      welcomeThreeOpacity={welcomeThreeOpacity}
      page={page}
      headerColour={headerColour}
      dotColour={dotColour}
      dotFill={dotFill}
      gallery={gallery}
      // Ref props
      copyRef={copyRef}
      plate2Ref={plate2Ref}
      treeRef={treeRef}
      hammonRef={hammonRef}
      parallaxRef={parallaxRef}
      appetiserPaneRef={appetiserPaneRef}
      entreePaneRef={entreePaneRef}
      dessertPaneRef={dessertPaneRef}
      drinksPaneRef={drinksPaneRef}
      // Function props
      handleClick={handleClick}
      setAppetiserRef={setAppetiserRef}
      setMenuTitleRef={setMenuTitleRef}
      dotNavClick={dotNavClick}
      // Gallery props (mixed)
      lightboxOpen={lightboxOpen}
      closeLightbox={closeLightbox}
      clickOnImage={clickOnImage}
      imageIndex={imageIndex}
    />
  ) : (
    <AsherahMobile />
  );
}

export default Logic;
