import { useState, useEffect } from "react";
import "./helper.css";
import AOS from "aos";
import "aos/dist/aos.css";

function getDirection(index) {
  return index % 2 === 0 ? "left" : "right";
}

function getAOSDirection(index) {
  return index % 2 === 0 ? "fade-up-right" : "fade-up-left";
}

function LowerComponent() {
  const [githubUserCollection, setGithubUserCollection] = useState([]);

  useEffect(() => {
    AOS.init();

    fetch("https://api.github.com/users").then((response) => {
      response
        .json()
        .then((data) => {
          const tempList = [];
          data.forEach((githubUser) => {
            tempList.push(githubUser.login);
          });
          setGithubUserCollection(tempList);
        })
        .then(() => {
          console.log("second");
        });
    });
  }, []);

  return (
    <div className="manual-container">
      <h2 data-aos="fade-up" data-aos-duration="3000">
        Github User Name Collection
      </h2>

      {githubUserCollection.map((item, index) => {
        return (
          <div
            key={index}
            align={getDirection(index)}
            className="main-container"
            data-aos={getAOSDirection(index)}
          >
            <div className="card-management" key={index}>
              <h5 className="card-title">{item}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LowerComponent;
