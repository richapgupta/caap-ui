import logo from "./assets/logos/stride-logo.png";

function App() {
  return (
    <div className="caap-page--bg">
      <h1 className="caap-page__logo">
        <img alt="" src={logo} />
      </h1>
      {/* <img src={require('./logo.jpeg')} /> */}

      <div className="caap-card">
        <h3 className="caap-card__heading">Welcome back</h3>
        <p className="caap-card__copy copy--letter-spacing">
          Stride is all you need to get ahead.
        </p>
        <button className="caap-button__solid">Login with my school</button>
        <p className="caap-card__copy copy--letter-spacing">
          No longer with your school ?
        </p>
        <button className="caap-button__outline">
          Login with username & password
        </button>
      </div>

      <div className="caap-card">
        <h3 className="caap-card__heading">Log In </h3>
        <p className="caap-card__copy">Log in into your school account</p>
        <button className="caap-button__disabled">Clever Log In</button>
        <div>
          <a href="#" className="caap-card__link">
            Log In with email
          </a>
        </div>
      </div>

      <h1 className="caap-page__heading">Let's Get Started</h1>
      <p className="caap-copy">
        Choose between the questionnaires below to help us learn more about you,
        so we can help suggest careers that match your interests.
      </p>
      <div className="caap-card">
        <h1 className="caap-card__heading">Quick Questionnaire</h1>
        <p className="caap-card__copy">6 Questions (Approx: 1 Min)</p>
        <p className="caap-card__copy">
          The quick assesment will ask you 6 questions to have a general
          knowledge of your skills and interests. The results will be less
          accurate and personalized to you.
        </p>
      </div>
    </div>
  );
}

export default App;
