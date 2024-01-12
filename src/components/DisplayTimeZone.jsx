import { DateTime } from "luxon";

const DisplayTimeZone = () => {
    const dateNow = DateTime.now().toLocaleString(DateTime.DATETIME_MED)
    console.log(DateTime.now())
    return ( <div className="info-text"><span className="info-text__title">Your local Date and Time:</span> {dateNow}</div> );
}
 
export default DisplayTimeZone;