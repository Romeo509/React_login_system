import React from "react";
import './landingPage.css'; // Import the external CSS file

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Main Content Section */}
      <div className="main-content">
        <p>Your gateway to a better experience.</p>
        <div>
          <a href="/login">
            <button>Login</button>
          </a>
          <a href="/signup">
            <button className="sign-up">Sign Up</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
