import { createUseStyles } from "react-jss";
import boxes from "../images/boxes.svg";

const useStyles = createUseStyles({
  footerContainer: {
    borderTop: "1px solid #1E1E1E",
    height: "auto",
    padding: 48,
    "@media (min-width: 0px) and (max-width: 652px)": {
      paddingTop: 24,
      paddingBottom: 24,
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
  footerHeading: {
    fontSize: 14,
    fontFamily: "Arial, sans-serif",
    fontWeight: 300,
    margin: "0 0 15px 0",
    marginBottom: 15,
    "@media (min-width: 0px) and (max-width: 652px)": {
      marginBottom: 5,
    },
  },
  footerLinksCopyright: {
    display: "flex",
    justifyContent: "space-between",
    "@media (min-width: 0px) and (max-width: 652px)": {
      flexDirection: "column",
      justifyContent: "flex-start",
    },
  },
  footerItem: {
    fontFamily: "univers-condensed-medium",
    fontSize: 12,
    cursor: "pointer",
    textDecoration: "none",
    color: "#1E1E1E",
    "&:hover": {
      color: "#1E1E1E",
    },
  },
  footerLinkedin: {
    marginRight: 8,
  },
  footerEmail: {
    marginLeft: 8,
  },
  footerCopyright: {
    paddingTop: 3,
    "@media (min-width: 0px) and (max-width: 652px)": {
      paddingTop: 5,
    },
  },
  boxesImage: {
    position: "relative",
    top: 4,
    left: 7,
  },
});

const Footer = ({ containerStyles }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footerContainer} style={containerStyles}>
      <h4 className={classes.footerHeading}>Let's Connect! :)</h4>
      <section className={classes.footerLinksCopyright}>
        <section>
          <a className={`${classes.footerItem} ${classes.footerLinkedin}`}>
            LINKEDIN
          </a>
          <span>/</span>
          <a className={`${classes.footerItem} ${classes.footerEmail}`}>
            HELLO@JULISSA.ZAVALA.COM
            <img src={boxes} className={classes.boxesImage} />
          </a>
        </section>
        <span className={`${classes.footerItem} ${classes.footerCopyright}`}>
          Copyright © Julissa Zavala 2025
        </span>
      </section>
    </footer>
  );
};

export default Footer;
