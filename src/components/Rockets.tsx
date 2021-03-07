import { useQuery, gql } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";
import { useEffect, useState } from "react";

const RocketsData = gql`
  query {
    rockets(limit: 4) {
      name
      description
      wikipedia
    }
  }
`;

interface errload {
  title: string;
}
interface rocketData {
  name: string;
  description: string;
  wikipedia: string;
}

const Rockets = () => {
  const { loading, data } = useQuery(RocketsData);
  const [rockets, setRockets] = useState<rocketData[]>([]);

  // ======================================== //
  useEffect(() => {
    if (!loading) {
      setRockets(data.rockets);
    }
  }, [data]);
  // ======================================== //
  return (
    <div
      className="container-fluid"
      id="ROCKETS"
      style={{ backgroundColor: "#141820" }}
    >
      <div className="row RocketROW">
        <div className="col col-12 RocketHeader">
          <h1>Rockets</h1>
        </div>
      </div>
      {navigator.onLine ? (
        <div className="row RocketROW">
          {rockets ? (
            rockets.map((v, i) => (
              <div
                key={i}
                className="col col-12 col-lg-3 col-xl-3 col-md-6 col-sm-12 RocketList"
              >
                <div>
                  <span>
                    <h1>{v.name}</h1>
                    <p>{v.description}</p>
                  </span>
                  <a href={v.wikipedia}>wikipedia</a>
                </div>
              </div>
            ))
          ) : (
            <div className="OFFLINE_BOX" style={{ marginLeft: 20 }}>
              <h1>Loading...........</h1>
            </div>
          )}
        </div>
      ) : (
        <div className="OFFLINE_BOX" style={{ marginLeft: 20 }}>
          <h1>Something Wrong! Rockets Data not Found.</h1>
          <p>Plaese Check Your Network Connection beacuse you'r offline</p>
        </div>
      )}
    </div>
  );
};
export default Rockets;
