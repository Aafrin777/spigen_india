
import React, { useState } from 'react'
import HeroAPI from "./API/Layer1API.js";
const AnotherPageHero = () => {
  //we can name and set by any name
  const [Herodata, setHerodata] = useState(HeroAPI)
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-services-leftside-img">
              <img src="./image/hero2.jpeg" alt="" />
            </div>

            {/* RIGHT SEC. */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App?</h1>

              {/* import API DATA */}
              {Herodata.map((curElem) => {

                // To import different title ,icon and 
                // To import different title ,icon and 
    const {id ,logo, title ,info} = curElem;
    return(
        <>
    <div className="col-12 col-lg-4 text-center work-container-subdiv" key={id}>
    <i className={`fontclass-style ${logo}`}></i>
    <h2 className='sub-heading'>{title}</h2>
    <p className='main-hero-para w-100'>{info}</p>
    </div>
    </>
    );
    })}
              <br />
              <button className='btn-style btn-style-border'>learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Part ABOUT SECTION */}

      
      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            
            {/* RIGHT SEC. */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">
                -- Support ANY language
              </h3>
              <h1 className="main-heading">World Class Support is <br /> Available 24/7</h1>

              {/* import API DATA */}
              {Herodata.map((curElem) => {

                // To import different title ,icon and 
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                    <i className={`fontclass-style ${logo}`}></i>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br />
              <button className='btn-style btn-style-border'>learn more</button>
            </div>
            {/* image section */}
            <div className="col-12 col-lg-5 our-services-rightside-img">
              <img src="./image/hero.webp" alt="" />
            </div>

          </div>
        </div>

      <button onClick={gotoMainhome}>go to home page</button>
      </section>
    </>
  );
};

export default AnotherPageHero ;