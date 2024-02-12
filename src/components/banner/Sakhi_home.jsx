import React,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import '../sakhi/Sakhi.css'

function Sakhi() {

    const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/Sakhi.json");
      setJsonData(response.data);
      // console.log("Fetched data:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
            <h1 className='section-head'>Baba Ji Ki Sakhi </h1>
    <section className="quotes">
        <div className="quote">
        {jsonData.slice(0, 3).map((item , index) => (
            <React.Fragment key={index}>
            <p className="a"  style={{ whiteSpace: "pre-line" }}>{item.data}</p>
            <hr />
          </React.Fragment>
         ))}
                   <Link to="/Sakhi"><button className="satsangpagebtn">More</button></Link>
          </div>        
    </section>
    </>
  )
}

export default Sakhi