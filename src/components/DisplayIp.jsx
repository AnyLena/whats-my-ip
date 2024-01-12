import {useEffect,useState} from "react"
import axios from 'axios';

const DisplayIp = () => {

    const [userIp,setUserIp] = useState()

    const fetchIp = async () => {
        try {
                    const response = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_REACT_KEY_IPIFY}`);
            setUserIp(response.data);
            console.log(response)
        } catch (error) {
            console.error("Error fetching data: ",error);
        }
    }

    useEffect( ()=> {
        fetchIp();

    },[])
    return ( <>
    {userIp && <div>IP: {userIp.ip}</div>}
    {userIp && <div>Country: {userIp.location.country}</div>}
    {userIp && <div>Region: {userIp.location.region}</div>}
    {userIp && <div>Timezone: {userIp.location.timezone}</div>}

    </> );
}
 
export default DisplayIp;