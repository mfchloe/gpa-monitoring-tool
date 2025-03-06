import React, { useState, useEffect } from "react";

function Home() {
  const studentImages = ["/student1.png", "/student2.png", "/student3.png"];

  // State to store the index of the current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // UseEffect to change the image every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % studentImages.length
      );
    }, 2000);
    return () => clearInterval(intervalId);
  }, [studentImages.length]);

  return (
    <div style={homeContainerStyle}>
      <div
        style={{
          ...imageCarouselStyle,
          backgroundImage: `url(${studentImages[currentImageIndex]})`,
        }}
      />
      <div style={welcomeMessageStyle}>
        <h1 style={welcomeTextStyle}>Welcome to the GPA Monitoring System</h1>
      </div>
    </div>
  );
}

const homeContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  width: "100%",
  position: "relative",
  textAlign: "center",
};

const imageCarouselStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const welcomeMessageStyle = {
  zIndex: 1,
  position: "relative",
};

const welcomeTextStyle = {
  fontSize: "2.5em",
  color: "#fff",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
};

export default Home;
