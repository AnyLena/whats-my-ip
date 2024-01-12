const DisplayIp = ({ userIp, userCountry }) => {
  return (
    <div className="location-info">
      {userIp && <div>Your IP: {userIp.ip}</div>}
      {userIp && <div>Country: {userCountry.name.common}</div>}
      {userIp && <div>Region: {userIp.location.region}</div>}
      {userIp && <div>Timezone: {userIp.location.timezone}</div>}
      {userCountry && <img src={userCountry.flags.png} alt="" />}
    </div>
  );
};

export default DisplayIp;
