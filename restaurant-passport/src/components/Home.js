import React from 'react';


const Home = () => {
    return (
        <div className="homecontainer">
      
      {/* <!-- Header --> */}

      <h1>Restaurant Passport</h1>
      {/* <!-- "Boxes" with some landing page promotionals  --> */}
      
      <div className="boxes">
        <div className="box">
          <h2>Endless ideas for a night out!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="box">
          <h2>Earn a stamp for each restaurant you've visited!</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="box">
          <h2>Easily search hundreds of restaurants!</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
    )
}

export default Home;