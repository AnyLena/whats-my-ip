import { DateTime } from "luxon";

const DisplayTimeZone = () => {
    const dateNow = DateTime.now().toLocaleString(DateTime.DATETIME_MED)
    console.log(DateTime.now())
    return ( <div>Your local date and time: {dateNow}</div> );
}
 
export default DisplayTimeZone;