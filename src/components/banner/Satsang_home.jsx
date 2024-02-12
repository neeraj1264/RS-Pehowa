// YourComponent.jsx or YourComponent.tsx
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube';
import "../satsang/Satsang_video.css";
import axios from "axios";

const Satsang_video = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/Satsang.json");
      setJsonData(response.data);
      // console.log("Fetched data:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const opts = {
    height: '200',
    width: '350',
    playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        showinfo: 0,
        loop: 1,
      },
  };
  return (
    <>
      <h2 className="section-head">Satsang Videos</h2>
      <section className="satsang-section bg-dark" id="satsang">
        <div className="satsangm">
          {jsonData.slice(0, 3).map((item) => (
            <div key={item.iframe} className="satsang-video">
              <YouTube
                videoId={item.id}
                opts={opts}
           
              />

              {/* Title (h4) */}
              <h4 style={{ whiteSpace: "pre-line" }}>{item.h4}</h4>

              {/* Date (p) */}
              <p>{item.p}</p>
            </div>
          ))}
        </div>
        <Link to="/Satsang"><button className="satsangpagebtn">More videos</button></Link>

      </section>
    </>
  );
};

export default Satsang_video;
