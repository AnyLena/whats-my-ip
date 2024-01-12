import { useState, useEffect } from "react";
import "./App.css";
import DisplayIp from "./components/DisplayIp";
import LeafletMap from "./components/LeafletMap";
import axios from "axios";
import DisplayTimeZone from "./components/DisplayTimeZone";

function App() {
  const [userIp, setUserIp] = useState();
  const [userCountry, setUserCountry] = useState();
  const [loading, setLoading] = useState(false);

  const fetchIp = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        ` https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.VITE_REACT_KEY_IPIFY
        }`
      );
      setUserIp(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCountry = async () => {
    try {
      const response = await axios.get(
        ` https://restcountries.com/v3.1/alpha/${userIp.location.country}
        `
      );
      setUserCountry(response.data[0]);
    } catch (error) {
      console.error("Error fetching data: ", error.message);
    }
  };

  useEffect(() => {
    fetchIp();
  }, []);

  useEffect(() => {
    fetchCountry();
  }, [userIp]);

  return (
    <>
      <h1>What's my IP?</h1>
      <div className="map-info-tile">
        {loading && <div>Loading ...</div>}

        {userIp && <LeafletMap userIp={userIp} />}
        <div>
          {userIp && userCountry && (
            <DisplayIp userIp={userIp} userCountry={userCountry} />
          )}
          {!loading && <DisplayTimeZone />}
        </div>
      </div>
    </>
  );
}

export default App;
