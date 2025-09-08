import HeaderNav from "../components/HeaderNav";
import CaseStudy from "../components/CaseStudy";
import Footer from "../components/Footer";
import downArrowIcon from "../images/down-arrow-black.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  welcomeSection: {
    width: "100%",
    paddingTop: 200,
    marginBottom: 0,
    "@media (min-width: 0px) and (max-width: 499px)": {
      paddingTop: 125,
    },
  },
  landingHeading: {
    fontFamily: "Roobert_Latin_bold",
    fontSize: 48,
    marginBottom: 24,
  },
  landingSecondaryHeading: {
    fontFamily: "Roobert_Latin_Regular",
    fontWeight: 100,
    fontSize: 14,
    width: 650,
    lineHeight: 1.2,
    "@media (min-width: 500px) and (max-width: 700px)": {
      width: 475,
    },
    "@media (min-width: 0px) and (max-width: 500px)": {
      width: "100%",
    },
  },
  companyName: {
    color: "#B24825",
  },
  secondaryHeadingLineBreak: {
    display: "inline-block",
    marginTop: 18,
  },
  selectedWork: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  downArrow: {
    position: "relative",
    top: 4,
  },
  selectedWorkText: {
    fontFamily: "Roobert_Latin_Regular",
    fontSize: 14,
    textAlign: "center",
    display: "inline-block",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 8,
    marginRight: 8,
    fontWeight: 100,
  },
  caseStudiesContainer: {
    paddingTop: 48,
    "@media (min-width: 701px) and (max-width: 1200px)": {
      paddingTop: 96,
    },
  },
});

const Landing = () => {
  const classes = useStyles();
  const { height } = useWindowDimensions();

  return (
    <>
      <section className="container">
        <HeaderNav />
        <section className={classes.welcomeSection}>
          <h1 className={classes.landingHeading}>Hi, my name is Julissa.</h1>
          <h2 className={classes.landingSecondaryHeading}>
            Currently working as a Product Designer II at{" "}
            <span className={classes.companyName}>
              New Visions for Public Schools
            </span>
            , designing a school management application for educators across
            NYC.
            <span className={classes.secondaryHeadingLineBreak}>
              Also an avid plant grower, amateur ceramicist, and Peruvian food
              enthusiast
            </span>
          </h2>
          <section
            className={classes.selectedWork}
            style={{ height: height - 440 }}
          >
            <section>
              <img
                src={downArrowIcon}
                alt="Black arrow pointing down"
                className={classes.downArrow}
              />
              <h3 className={classes.selectedWorkText}>SELECTED WORK</h3>
              <img
                src={downArrowIcon}
                alt="Black arrow pointing down"
                className={classes.downArrow}
              />
            </section>
          </section>
        </section>
        <section className={classes.caseStudiesContainer}>
          <CaseStudy route="dataGrid" />
          <CaseStudy />
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
