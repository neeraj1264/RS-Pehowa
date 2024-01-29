import React,{useState , useEffect} from 'react'
import axios from "axios";
import './Sakhi.css'

function Sakhi() {

    const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/Sakhi.json");
      setJsonData(response.data);
      console.log("Fetched data:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
    <section className="quotes">
        <h1 className='section-head'>Baba Ji Ki Sakhi </h1>
        <div className="quote">
        {jsonData.map((item, index) => (
            <React.Fragment key={index}>
            <p className="a"  style={{ whiteSpace: "pre-line" }}>{item.data}</p>
            <hr />
          </React.Fragment>
         ))}
          </div>        
    </section>
    </>
  )
}

export default Sakhi