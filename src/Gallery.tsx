import React, { useEffect, useState } from "react";

interface GalleryProps {
  gallery: { src: string; title: string }[];
  clickOnImage: (index: number) => void;
  lightboxOpen: boolean;
}

function Gallery(props: GalleryProps): React.ReactElement {
  /* Declaring, setting and responding to landscape state
  - landscape set as state
  - simple function to set landscape boolean as per shape viewport
  - useEffect with empty dependency array to run check on component mount and deploy event listener to re-run check on window resize; return statement to liquidate event listener */
  const [landscape, setLandscape] = useState<boolean>(true);
  const landscapeCheck = (): void => {
    if (window.innerWidth > window.innerHeight) {
      setLandscape(true);
    } else setLandscape(false);
  };
  useEffect(() => {
    landscapeCheck();
    const handleResize = (): void => {
      landscapeCheck();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Stores the index of hovered-over image when applicable
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);
  
  // Return JSX
  return (
    <div
      id="gallery-container"
      style={{
        gridTemplateColumns: landscape
          ? "repeat(3, 22.5vh)"
          : "repeat(3, min(28vw, 22.5vh)",
      }}
    >
      {props.gallery.map((image, index) => {
        if (hoverIndex === null)
          return (
            <div className="img-container" key={index}>
              <img
              alt="gallery-image"
                src={image.src}
                className="gallery-img"
                onClick={() => {
                  props.clickOnImage(index);
                }}
                onMouseEnter={() => {
                  setHoverIndex(index);
                }}
                onMouseLeave={() => {
                  setHoverIndex(null);
                }}
              />
            </div>
          );
        else
          return (
            <div key={index}
              className={
                hoverIndex === index ? "img-container" : "img-container dead"
              }
            >
              <img
                alt="gallery-img"
              src={image.src}
                className="gallery-img"
                onClick={() => {
                  props.clickOnImage(index);
                }}
                onMouseEnter={() => {
                  setHoverIndex(index);
                }}
                onMouseLeave={() => {
                  setHoverIndex(null);
                }}
              />
            </div>
          );
      })}
    </div>
  );
}

export default Gallery;
