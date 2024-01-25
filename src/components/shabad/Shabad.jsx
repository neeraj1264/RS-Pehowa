// YourComponent.jsx or YourComponent.tsx
import React, { useState, useEffect } from "react";
import "./Shabad.css";
import axios from "axios";

const Shabad = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/src/components/shabad/Shabad.json");
      setJsonData(response.data);
      console.log("Fetched data:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h2 className="section-head">Shabad Videos</h2>
      <section className="shabad-section bg-dark" id="shabad">
        <div className="shabadm">
          {jsonData &&
            jsonData.map((item) => (
              <div key={item.iframe} className="satsang-video">
                <iframe
                  width="350"
                  height="200"
                  src={`https://www.youtube.com/embed/${item.iframe}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                {/* Title (h4) */}
                <h4 style={{ whiteSpace: "pre-line" }}>{item.h4}</h4>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Shabad;
