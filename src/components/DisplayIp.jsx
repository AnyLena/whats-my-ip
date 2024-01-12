const DisplayIp = ({ userIp, userCountry }) => {
  return (
    <div className="location-info">
      {userIp && <div className="info-text"><span className="info-text__title">Country:</span> {userCountry.name.common}</div>}
      {userIp && <div className="info-text"><span className="info-text__title">Your IP:</span> {userIp.ip}</div>}
      {userIp && <div className="info-text"><span className="info-text__title">Region:</span> {userIp.location.region}</div>}
      {userIp && <div className="info-text"><span className="info-text__title">Timezone:</span> {userIp.location.timezone}</div>}
      {userCountry && <img src={userCountry.flags.png} alt="Country Flag" />}
    </div>
  );
};

export default DisplayIp;
