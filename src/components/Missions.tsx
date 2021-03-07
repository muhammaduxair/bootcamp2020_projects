import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Button } from "@material-ui/core";

const MissionData = gql`
  query MissionData($id: ID!) {
    missions {
      name
      id
    }
    mission(id: $id) {
      name
      id
      description
      website
      wikipedia
    }
  }
`;

interface missions {
  id: string;
  name: string;
  foc: boolean;
}
interface mission {
  name: string;
  id: string;
  description: string;
  website: string;
  wikipedia: string;
}
interface MISSION_DATA {
  mission: mission;
  missions: missions[];
}

const Missions = () => {
  const [missionID, setMissionID] = useState<string>("9D1B7E0");
  const { data } = useQuery(MissionData, {
    variables: { id: missionID },
  });
  const DATA: MISSION_DATA = data;

  return (
    <div
      className="container-fluid MAIN_MISSION_CONATINER"
      style={{ backgroundColor: "#0c0f14" }}
      id="MISSIONS"
    >
      <div className="row FISRT_ROW">
        <div className="col-12">
          <h2>missions</h2>
        </div>
      </div>
      {navigator.onLine ? (
        <div className="row SECOND_ROW">
          <div className="col col-4">
            {DATA
              ? DATA.missions.map((v, i) => (
                  <p
                    key={i}
                    onClick={() => setMissionID(v.id)}
                    className={v.id === missionID ? "FOCUS_CLR" : ""}
                  >
                    {v.name}
                  </p>
                ))
              : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => (
                  <Skeleton
                    key={i}
                    height={60}
                    style={{ backgroundColor: "#7376731c" }}
                  />
                ))}
          </div>
          <div className="col col-8">
            {DATA ? (
              <div className="MISSION_DATA_MISSION">
                <span>
                  <h1>{DATA.mission.name}</h1>
                  <h2>{DATA.mission.id}</h2>
                </span>
                <p>{DATA.mission.description}</p>
                <div>
                  <Button
                    variant="outlined"
                    className="BTTN"
                    href={DATA.mission.wikipedia}
                  >
                    Wikipedia
                  </Button>
                  <Button
                    variant="outlined"
                    className="BTTN"
                    href={DATA.mission.website}
                  >
                    Website
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <span style={{ display: "flex" }}>
                  <Skeleton
                    variant="text"
                    height={70}
                    width={200}
                    style={{
                      backgroundColor: "#7376731c",
                    }}
                  />
                  <Skeleton
                    variant="text"
                    height={70}
                    width={200}
                    style={{ backgroundColor: "#7376731c", marginLeft: 10 }}
                  />
                </span>
                {[0, 1, 2, 3, 4].map((v, i) => (
                  <Skeleton
                    key={i}
                    variant="text"
                    height={40}
                    style={{ backgroundColor: "#7376731c" }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="OFFLINE_BOX">
          <h1>Something Wrong! Mission Data not Found.</h1>
          <p>Plaese Check Your Network Connection beacuse you'r offline</p>
        </div>
      )}
    </div>
  );
};
export default Missions;
