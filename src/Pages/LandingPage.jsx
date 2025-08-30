import HeaderNav from "../components/HeaderNav";
import CaseStudy from "../components/CaseStudy";
import Footer from "../components/Footer";
import downArrowIcon from "../images/down-arrow-black.svg";

const Landing = () => {
  return (
    <>
      <section className="container">
        <HeaderNav />
        <section className="welcome-section">
          <h1 className="landing-heading">Hi, my name is Julissa.</h1>
          <h2 className="landing-secondary-heading">
            Currently working as a Product Designer II at{" "}
            <span className="company-name">New Visions for Public Schools</span>
            , designing a school management application for educators across
            NYC.
            <span className="secondary-heading-line-break">
              Also an avid plant grower, amateur ceramicist, and Peruvian food
              enthusiast
            </span>
          </h2>
          <section className="selected-work">
            <section>
              <img
                src={downArrowIcon}
                alt="Down arrow"
                className="down-arrow"
              />
              <h3 className="selected-work-text">SELECTED WORK</h3>
              <img
                src={downArrowIcon}
                alt="Down arrow"
                className="down-arrow"
              />
            </section>
          </section>
        </section>
        <section className="case-studies-container">
          <CaseStudy route="studentProfile" />
          <CaseStudy />
          <CaseStudy />
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
