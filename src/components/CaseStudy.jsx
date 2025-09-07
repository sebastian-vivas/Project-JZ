import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import rightArrowIcon from "../images/right-arrow-black.svg";
import mockImage from "../images/mockImageLanding.svg";

const useStyles = createUseStyles({
  caseStudyContainer: {
    paddingTop: 53,
    paddingBottom: 53,
    paddingLeft: "4%",
    paddingRight: "4%",
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 48,
    marginRight: 0,
    marginLeft: 0,
    "@media (min-width: 0px) and (max-width: 1200px)": {
      padding: 0,
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: 48,
    },
  },
  caseStudyImage: {
    width: "46%",
    "@media (min-width: 0px) and (max-width: 1280px)": {
      width: "clamp(300px, 98%, 608px)",
    },
  },
  caseStudyInfo: {
    width: "46%",
    height: "auto",
    paddingTop: 24,
    paddingBottom: 24,
    marginLeft: "7%",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      paddingTop: 38,
      paddingBottom: 48,
      marginLeft: 0,
      width: "clamp(300px, 93%, 750px)",
    },
    "@media (min-width: 0px) and (max-width: 499px)": {
      paddingTop: 24,
    },
  },
  caseStudyTitle: {
    fontFamily: "univers-condensed-medium",
    fontSize: 22,
    fontWeight: 800,
    marginBottom: 0,
    "@media (min-width: 701px) and (max-width: 1200px)": {},
  },
  caseStudyDescription: {
    fontFamily: "Arial, sans-serif",
    fontSize: 14,
    marginTop: 10,
    lineHeight: 1.3,
  },
  readMoreText: {
    fontFamily: "univers-condensed-medium",
    color: "#1E1E1E",
    fontSize: 14,
    lineHeight: "normal",
  },
  readMoreTextLineThrough: {
    position: "absolute",
    width: 75,
    height: 1,
    bottom: 14,
    left: 0,
    backgroundColor: "#1E1E1E",
    transform: "translateY(-50%) scaleX(0)",
    transformOrigin: "left center",
    transition: "transform 0.15s ease-in-out",
  },
  caseStudyReadMore: {
    position: "relative",
    color: "#1E1E1E",
    fontFamily: "univers-condensed-medium",
    fontSize: 12,
    cursor: "pointer",
    top: 36,
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    width: 85,
    marginTop: 25,
    "&:hover $readMoreTextLineThrough": {
      transform: "translateY(-50%) scaleX(1)",
      bottom: 14,
    },
    "@media (min-width: 0px) and (max-width: 499px)": {
      marginTop: 0,
    },
  },
  rightArrow: {
    marginLeft: 8,
    position: "relative",
    bottom: 7,
    display: "block",
  },
  caseStudyCompanyName: {
    color: "#7B7B7B",
    fontFamily: "univers-condensed-medium",
    lineHeight: 2.3,
    fontSize: 12,
    fontWeight: 100,
  },
});

const CaseStudy = ({ route, containerStyles }) => {
  const classes = useStyles();

  return (
    <section className={classes.caseStudyContainer} style={containerStyles}>
      <img src={mockImage} className={classes.caseStudyImage} />
      <section className={classes.caseStudyInfo}>
        <p className={classes.caseStudyTitle}>
          Introducing a Gradebook feature to provide real-time grade trends for
          over 77,000 teachers.
        </p>
        <span className={classes.caseStudyCompanyName}>
          NEW VISIONS FOR PUBLIC SCHOOLS
        </span>
        <p className={classes.caseStudyDescription}>
          I collaborated with leadership to strengthen our partnership with the
          NYC DOE by developing a proposal to integrate gradebook data into the
          Portal, enabling teachers and school leaders to track student progress
          and coordinate support for those in need of intervention.
        </p>
        <Link to={`/${route}`} className={classes.caseStudyReadMore}>
          <div className={classes.readMoreTextText}>READ MORE</div>
          <div className={classes.readMoreTextLineThrough}></div>
          <img
            src={rightArrowIcon}
            alt="Right arrow"
            className={classes.rightArrow}
          />
        </Link>
      </section>
    </section>
  );
};

export default CaseStudy;
