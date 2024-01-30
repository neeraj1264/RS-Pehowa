// YourComponent.jsx or YourComponent.tsx
import React from "react";
import "./Live.css";

const Live = () => {

  return (
    <>
      <h2 className="section-head">Live Satsang</h2>
      <section className="live-section bg-dark" id="satsang">
        <div className="live">
              <div className="live-camera">
                <iframe
                //   width="100%"
                //   height="100%"
                  src={"https://www.youtube.com/embed/hhrZIY-LtvY?si=bjWhHoRF_o4i1RBR"}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                {/* <h4 style={{ whiteSpace: "pre-line" }}>Live Broadcast</h4> */}
              </div>
        </div>
      </section>
    </>
  );
};

export default Live;
