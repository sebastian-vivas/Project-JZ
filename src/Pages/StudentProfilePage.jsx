import { createUseStyles } from "react-jss";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import clsx from "clsx";
import downArrowIcon from "../images/down-arrow-black.svg";
import dots from "../images/dots.svg";
import dataGridHero from "../images/DataGridHero.svg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import beforeImageSVG from "../images/1_Before.svg";
import afterImageSVG from "../images/1_after.svg";
import templateViews from "../images/templateViews.svg";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import viewDiagram from "../images/4_viewDiagram.svg";
import gif from "../images/6_savebutton-ezgif.com-resize.gif";
import saveButton from "../images/6_savebutton.mp4";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "react-image-gallery/styles/css/image-gallery.css";
import line from "../images/line.svg";

const useStyles = createUseStyles({
  caseStudySection: {
    paddingTop: 72,
    paddingBottom: 72,
    paddingLeft: 0,
    paddingRight: 0,
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 40,
    marginRight: 0,
    marginLeft: 0,
    borderTop: "1px solid #767676",
    borderBottom: "1px solid #767676",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      padding: 0,
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: 48,
      marginTop: 32,
      marginBottom: 32,
    },
  },
  caseStudyImage: {
    width: "100%",
  },
  caseStudyImageContainer: {
    width: "47%",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      width: "100%",
    },
  },
  caseStudyInfo: {
    width: "47%",
    height: "auto",
    lineHeight: 1.3,
    "@media (min-width: 0px) and (max-width: 1200px)": {
      paddingTop: 0,
      paddingBottom: 32,
      marginLeft: 0,
      width: "100%",
    },
  },
  title: {
    fontFamily: "Roobert_Latin_Bold",
    fontSize: 22,
    fontWeight: 800,
    marginBottom: 0,
    "@media (min-width: 701px) and (max-width: 1200px)": {},
  },
  description: {
    fontFamily: "Roobert_Latin_Regular",
    fontSize: 14,
    marginTop: 16,
  },
  caseStudyDetails: {
    color: "#1E1E1E",
    fontFamily: "Roobert_Latin_Regular",
    lineHeight: 1.2,
    fontSize: 12,
    fontWeight: 100,
    marginRight: 32,
  },
  caseStudyContainer: {
    paddingTop: 48,
  },
  heroImage: {
    marginBottom: 48,
    display: "block",
    width: "100%",
  },
  mainHeading: {
    fontFamily: "Roobert_Latin_Bold",
    fontSize: 43,
    textAlign: "left",
    marginBottom: 24,
    "@media (min-width: 0px) and (max-width: 1139px)": {
      width: "100%",
    },
    "@media (min-width: 0px) and (max-width: 550px)": {
      fontSize: 20,
    },
  },
  bold: {
    fontFamily: "Roobert_Latin_Bold",
  },
  caption: {
    fontFamily: "Roobert_Latin_Regular",
    fontSize: 12,
    marginTop: 10,
    color: "#767676",
  },
  scrollToLearnMore: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  downArrow: {
    position: "relative",
    top: 4,
  },
  scrollToLearnMoreText: {
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
  number: {
    fontSize: 12,
    color: "#767676",
    fontFamily: "Roobert_Latin_Regular",
    fontWeight: 100,
    marginRight: 8,
  },
  dots: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  twoImageContainer: {
    width: "47%",
    display: "flex",
    justifyContent: "space-between",
  },
  ohOneStyles: {
    borderTop: "none",
    borderBottom: "none",
    paddingTop: 40,
    paddingBottom: 40,
    "@media (min-width: 0px) and (max-width: 1200px)": {
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 32,
      marginBottom: 32,
    },
  },
  ohTwoStyles: {
    borderTop: "none",
    borderBottom: "none",
    paddingTop: 40,
    paddingBottom: 40,
    flexWrap: "wrap",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      paddingBottom: 0,
      paddingTop: 0,
    },
  },
  quote: {
    fontFamily: "Roobert_Latin_Bold",
    fontSize: 32,
    color: "#01A4DC",
    lineHeight: 1.5,
    "@media (min-width: 0px) and (max-width: 550px)": {
      fontSize: 20,
    },
  },
  quoteContainer: {
    width: "46%",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      width: "100%",
    },
  },
  graphImage: {
    marginBottom: 80,
    width: "100%",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      marginBottom: 32,
    },
  },
  tldr: {
    paddingTop: 72,
    paddingBottom: 72,
    paddingLeft: 0,
    paddingRight: 0,
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 48,
    marginBottom: 48,
    marginRight: 0,
    marginLeft: 0,
    borderTop: "1px solid #767676",
    borderBottom: "1px solid #767676",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      padding: 0,
      flexDirection: "column-reverse",
      justifyContent: "center",
      paddingTop: 32,
      marginTop: 32,
      marginBottom: 32,
    },
  },
  customVideo: {
    width: "47%",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      width: "100%",
    },
  },
  zoomBackground: {
    '& [data-rmiz-modal-overlay="visible"]': {
      backgroundColor: "#1E1E1E !important",
    },
  },
  results: {
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 0px) and (max-width: 1200px)": {
      width: "25%",
    },
  },
  resultsPercentage: {
    fontFamily: "Roobert_Latin_Bold",
    marginBottom: 8,
  },
  resultsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Roobert_Latin_Regular",
  },
  impactContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    "& > div:first-child": {
      width: "40%",
      "@media (min-width: 0px) and (max-width: 1200px)": {
        width: "100%",
      },
    },
    "@media (min-width: 0px) and (max-width: 1200px)": {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
});

const StudentProfile = () => {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  const beforeImage = {
    imageUrl: beforeImageSVG,
  };

  const afterImage = {
    imageUrl: afterImageSVG,
  };

  return (
    <>
      <section className="container">
        <HeaderNav />
        <section className={classes.caseStudyContainer}>
          <img src={dataGridHero} className={classes.heroImage} />
          <h1 className={classes.mainHeading}>
            From data silos to quick insights: Designing a student overview
            panel
          </h1>
          <div>
            {" "}
            <span
              className={clsx(classes.caseStudyDetails, classes.bold)}
              style={{ marginRight: 134 }}
            >
              Role
            </span>
            <span
              className={clsx(classes.caseStudyDetails, classes.bold)}
              style={{ marginRight: 30 }}
            >
              Duration
            </span>
            <span className={clsx(classes.caseStudyDetails, classes.bold)}>
              Tools
            </span>
          </div>
          <div>
            {" "}
            <span className={classes.caseStudyDetails}>
              Lead Product Designer
            </span>
            <span className={classes.caseStudyDetails}>13 Weeks</span>
            <span className={classes.caseStudyDetails}>
              Figma, Miro, Mixpanel
            </span>
          </div>
          <section className={classes.tldr}>
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>TL;DR</p>
              <p className={classes.description}>
                <span className={classes.bold}>The challenge: </span>Teachers
                were spending 5-10 minutes per student clicking through multiple
                data panels just to answer basic questions like "How is this
                student doing overall?
              </p>
              <p className={classes.description}>
                <span className={classes.bold}>My solution: </span>
                Designed a student overview panel that synthesizes key insights
                from across the system - attendance patterns, academic progress,
                graduation requirements, and intervention data - in one
                scannable view.
              </p>
              <p className={classes.description}>
                <span className={classes.bold}>The impact: </span>43% reduction
                in student assessment time, 67% increase in panel engagement,
                and 89% of teachers reported significantly improved workflow
                efficiency.
              </p>
              <p className={classes.title} style={{ marginTop: 16 }}>
                My role
              </p>
              <p className={classes.description}>
                Lead Product Designer working directly with engineering, product
                management, and 8 NYC educators. I owned the end-to-end design
                process from research through implementation over 3 months.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              <ReactBeforeSliderComponent
                firstImage={afterImage}
                secondImage={beforeImage}
                className={classes.delimeterContainer}
                delimiterColor="#01A4DC"
              />
              <p
                className={classes.caption}
                style={{ paddingBottom: width <= 1200 ? 16 : null }}
              >
                Before and after of the student profile page
              </p>
            </div>
          </section>
          <section className={classes.scrollToLearnMore}>
            <section>
              <img
                src={downArrowIcon}
                alt="Black arrow pointing down"
                className={classes.downArrow}
              />
              <h3 className={classes.scrollToLearnMoreText}>
                Scroll to learn more
              </h3>
              <img
                src={downArrowIcon}
                alt="Black arrow pointing down"
                className={classes.downArrow}
              />
            </section>
          </section>
          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>01</span>Uncovering the real
                problem
              </p>
              <p className={classes.description}>
                During user interviews with 8 NYC educators, I used contextual
                inquiry to understand their actual workflows during parent
                conference prep. What I found was eye-opening: teachers were
                consistently spending 5-10 minutes per student jumping between
                panels just to get basic information.
              </p>
              <p className={classes.description}>
                When I dug into our analytics, the behavior matched perfectly:
                73% of users accessed 3+ panels per student session, typically
                following the same sequence: attendance → academics → credits →
                state requirements.
              </p>
              <p className={classes.description}>
                While we were already redesigning the Portal's navigation from a
                long scrollable list to a sidebar for easier panel access, I
                realized the core problem wasn't just navigation. Teachers
                needed to synthesize scattered information quickly, not just
                access it more efficiently.
              </p>
            </section>
            <div className={classes.quoteContainer}>
              <p className={classes.quote}>
                “I need to click through 4 different sections just to get the
                full picture before a parent conference.”
              </p>
              <p className={classes.caption}>
                - From a conversation with a frequent Portal user
              </p>
            </div>
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>02</span>The wrong solution
                (and learning from it)
              </p>
              <p className={classes.description}>
                Initially, I created a dashboard-heavy approach with new data
                visualizations, responding to stakeholder requests for "more
                visual" content.
              </p>
              <p className={classes.description}>
                The stakeholder feedback was insightful: "Teachers don't need
                more data to look at. They need help understanding what it means
                for each student." Additionally, shifting priorities meant some
                requested metrics (like Tasks and Notes) were no longer needed.
                This reframed my approach from data display to insight
                synthesis.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              <Zoom classDialog={classes.zoomBackground}>
                <img src={beforeImageSVG} width="100%" />
              </Zoom>
            </div>
          </section>
          <div
            className={classes.quoteContainer}
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: width >= 1201 ? 80 : 32,
            }}
          >
            <p className={classes.quote}>
              “Teachers don't need more data to look at. They need help
              understanding what it means for each student.”
            </p>
            <p className={classes.caption}>
              - From a stakeholder during design review
            </p>
          </div>
          <img src={width >= 551 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohTwoStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>03</span>Strategic focus over
                feature bloat
              </p>
              <p className={classes.description}>
                Each team had compelling reasons for featuring their metrics
                prominently—citing user feedback and business value. Through
                collaborative design workshops, we explored how to balance
                comprehensive access with usability. The challenge was creating
                a solution that honored everyone's valid concerns while solving
                the core user problem.
              </p>
              <p className={classes.description}>
                My approach centered on making the 4 core modules
                clickable—teachers get immediate insights with drill-down
                capability for deeper analysis. This preserved access to all the
                information teams needed elevated while maintaining the
                scannable simplicity teachers required.
              </p>
              <p className={classes.description}>
                Using Mixpanel data, I proposed adding detailed Attendance and
                Academics sections below the core modules. Since these were the
                most-accessed panels, this approach gave stakeholders confidence
                their content remained appropriately prominent.
              </p>
            </section>
            <div className={classes.caseStudyImageContainer}>
              {" "}
              <Zoom classDialog={classes.zoomBackground}>
                <img src={viewDiagram} width="100%" />
              </Zoom>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img src={templateViews} style={{ width: "80%" }} />
            </div>
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohTwoStyles)}
          >
            <section className={classes.caseStudyInfo}>
              <p className={classes.title}>
                <span className={classes.number}>04</span>Solving the
                performance challenge
              </p>
              <p className={classes.description}>
                Engineering flagged a critical issue: my design required 8+
                simultaneous API calls versus existing on-demand loading. On
                school Chromebooks, this meant 15+ second load times.
              </p>
              <p className={classes.description}>
                Rather than compromise the design, I worked closely with
                engineering to create a full-screen skeleton loading approach.
                The entire panel displays as a skeleton state while all data
                loads in the background, then transitions smoothly to the
                complete interface once everything is ready.
              </p>
              <p className={classes.description}>
                The skeleton loading system worked so well that other teams
                started asking for the documentation. Within 6 months, 5 other
                Portal features had adopted the same pattern.
              </p>
            </section>
            {width >= 551 && (
              <video
                controls={false}
                autoPlay
                loop
                muted
                className={classes.customVideo}
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
              >
                <source src={saveButton} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {width <= 550 && <img width="100%" src={gif} />}
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohTwoStyles)}
          >
            <section
              className={classes.caseStudyInfo}
              style={{ width: "100%", paddingBottom: width <= 1200 && 0 }}
            >
              <p className={classes.title}>
                <span className={classes.number}>05</span>Impact
              </p>
              <p
                className={classes.description}
                style={{ width: width > 1200 ? "47%" : "100%" }}
              >
                The final panel synthesized attendance patterns (with
                interactive calendar), projected GPA, credits, and state testing
                progress. Supporting modules provided detailed attendance and
                academic context.
              </p>
              <div className={classes.impactContent}>
                <Zoom classDialog={classes.zoomBackground}>
                  <img
                    src={afterImageSVG}
                    style={{
                      marginTop: 24,
                      width: "100%",
                    }}
                  />
                </Zoom>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: width > 1200 ? "50%" : "100%",
                    marginBottom: width >= 1200 ? 64 : 0,
                    alignSelf: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Roobert_Latin_Regular",
                      fontSize: 14,
                      marginTop: 32,
                      marginBottom: 32,
                    }}
                  >
                    Results after 6 weeks:
                  </p>{" "}
                  <div className={classes.resultsContainer}>
                    <p className={classes.results}>
                      <span className={classes.resultsPercentage}>91.0%</span>
                      Reduction in student assessment time
                    </p>
                    <p className={classes.results}>
                      <span className={classes.resultsPercentage}>91.0%</span>
                      Reduction in student assessment time
                    </p>
                    <p className={classes.results}>
                      <span className={classes.resultsPercentage}>91.0%</span>
                      Reduction in student assessment time
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section
              className={classes.caseStudyInfo}
              style={{ paddingBottom: width <= 1200 && 0 }}
            >
              <p className={classes.title}>
                <span className={classes.number}>06</span>Key insights
              </p>
              <p className={classes.description}>
                Strategic curation beats comprehensive display. Focusing on 4
                key modules actually increased detailed panel engagement,
                proving thoughtful hierarchy enhances exploration.
              </p>
              <p className={classes.description}>
                Technical constraints drive innovation. The skeleton loading
                system solved performance issues and became a reusable pattern,
                showing how collaborative problem-solving creates scalable
                solutions.
              </p>
              <p className={classes.description}>
                User needs trump stakeholder requests. Success came from
                understanding why teachers needed information, not just what
                information they wanted displayed.
              </p>
            </section>{" "}
          </section>
          <img src={width >= 551 ? dots : line} className={classes.dots} />
          <section
            className={clsx(classes.caseStudySection, classes.ohOneStyles)}
          >
            <section
              className={classes.caseStudyInfo}
              style={{ paddingBottom: width <= 1200 && 0 }}
            >
              <p className={classes.title}>
                <span className={classes.number}>07</span>Reflection
              </p>
              <p className={classes.description}>
                Looking back, I should have looped in engineering during my
                wireframing phase rather than after stakeholder approval.
                Discovering the API performance limitation two weeks into
                development created unnecessary pressure and timeline risk. The
                most surprising challenge wasn't technical though—it was
                internal stakeholder management. Teams genuinely believed more
                visible data meant more value, and it took persistent advocacy
                plus our eventual success metrics to shift that mindset.
                Ironically, the loading constraint led to our biggest win beyond
                the panel itself: the skeleton system became a reusable
                component that's now used across the platform. This project
                taught me that sometimes the best solutions come from embracing
                constraints rather than working around them.
              </p>
            </section>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default StudentProfile;
