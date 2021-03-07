import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

const LaunchesQuery = gql`
  query {
    launches(limit: 19) {
      details
      id
      launch_date_local
      launch_site {
        site_name
      }
      mission_id
      mission_name
      launch_year
      links {
        article_link
        flickr_images
        video_link
        wikipedia
      }
    }
  }
`;

interface launchesInt {
  details: string;
  id: string;
  launch_date_local: string;
  launch_site: {
    site_name: string;
  };
  launch_year: string;
  links: {
    article_link: string;
    flickr_images: string[];
    video_link: string;
    wikipedia: string;
  };
  mission_id: string[];
  mission_name: string;
}

const Launches = () => {
  const { loading, data } = useQuery(LaunchesQuery);
  const [launchesData, setLaunchesData] = useState<launchesInt[]>([]);

  useEffect(() => {
    if (!loading) {
      const dataFilter = data.launches.filter((val: launchesInt) => {
        return val.details !== null && val.links.flickr_images.length > 0;
      });
      setLaunchesData(dataFilter);
    }
  }, [data]);

  return (
    <div
      className="container-fluid"
      id="LAUNCHES"
      style={{ backgroundColor: "#141820" }}
    >
      <div className="row RocketROW">
        <div className="col col-12 RocketHeader">
          <h1>Launches</h1>
        </div>
      </div>
      {navigator.onLine ? (
        <div className="row LaunchesROW">
          {launchesData ? (
            launchesData.map((v, i) => (
              <div
                key={i}
                className="col col-12 col-lg-6 col-xl-6 col-md-6 col-sm-12 LaunchesList"
              >
                <div>
                  <span>
                    <img
                      src={v.links.flickr_images[0]}
                      alt={v.mission_name + "_image"}
                    />
                    <h1>{v.mission_name}</h1>
                    <span>
                      <h1>{v.mission_id}</h1>
                      <h1>{v.launch_year}</h1>
                    </span>
                    <p>{v.details}</p>
                  </span>
                  <div>
                    <button className="btn btn-secondary">Website</button>
                    <span>
                      <a href={v.links.video_link}>Video Link</a>
                      <a href={v.links.wikipedia}>Wikipedia</a>
                    </span>
                  </div>
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
          <h1>Something Wrong! Launches Data not Found.</h1>
          <p>Plaese Check Your Network Connection beacuse you'r offline</p>
        </div>
      )}
    </div>
  );
};

export default Launches;
