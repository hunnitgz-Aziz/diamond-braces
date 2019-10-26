import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { images } from "../components/images";
import "../styles/splash-page.css";
import BrandLogo from "../assets/brand_logo.svg";
import Button from "../components/Button";

const Wrapper = styled.div`
  position: relative;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
`;

const Logo = styled.img``;

const INITIAL_INDEX = 0;

function SplashPage() {
  useEffect(() => {
    document.body.classList.add("splash-page");

    return function cleanup() {
      document.body.classList.remove("splash-page");
    };
  }, []);

  const [index, setIndex] = React.useState(INITIAL_INDEX);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(INITIAL_INDEX);
      } else {
        setIndex(index + 1);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Wrapper>
      <Header>
        <Logo src={BrandLogo} />
      </Header>
      <Gallery
        index={index}
        enableIndicators={false}
        enableControls={false}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(img => (
          <GalleryImage objectFit="cover" key={img.src} src={img.src} />
        ))}
      </Gallery>
      <Link to="/home">
        <Button label="Start App" />
      </Link>
    </Wrapper>
  );
}

export default SplashPage;
