import React, { useState, useEffect } from "react";
import "./common.css";
import AOS from 'aos';
import "aos/dist/aos.css";

function getDirection(index) {
  return index % 2 === 0 ? "left" : "right";
}

function getAOSDirection(index){
    return index % 2 === 0 ? "fade-up-right" : "fade-up-left";
}

export default function Lowerside() {
  const [githubUserNameCollection, setGithubUserNameCollection] = useState([]);

  useEffect(() => {
    AOS.init();

    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        const tempList = [];
        data.forEach((githubUser) => {
          tempList.push(githubUser.login);
        });

        setGithubUserNameCollection(tempList);
      });
  }, []);

  return (
    <div className="lowerside">
      <div className="heading" data-aos="fade-up" data-aos-duration="3000">Github User Name Collection</div>
      <div className="card-collections">
        {githubUserNameCollection.map((userName, index) => {
          return (
            <div className="card-iteself-holder" align={getDirection(index)} key={index}>
              <div className="card-itself" data-aos={getAOSDirection(index)}>
                {userName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
