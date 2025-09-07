import { useState, useRef } from "react";
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
    cursor: "text",
    "@media (min-width: 0px) and (max-width: 652px)": {
      paddingTop: 5,
    },
  },
  boxesImage: {
    position: "relative",
    top: 4,
    left: 7,
  },
  copiedAlert: {
    fontFamily: "arial",
    position: "absolute",
    width: 55,
    height: 23,
    backgroundColor: "#1E1E1E",
    color: "white",
    textAlign: "center",
    left: 227,
    marginTop: 5,
    fontSize: 12,
    padding: 4,
    borderRadius: 3,
    "@media (min-width: 0px) and (max-width: 652px)": {
      left: 195,
    },
  },
  arrowUp: {
    position: "absolute",
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderBottom: "5px solid #1E1E1E",
    left: 250,
    "@media (min-width: 0px) and (max-width: 652px)": {
      left: 218,
    },
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes fadeOut": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
  fadeIn: {
    opacity: 1,
    animationName: "$fadeIn",
    animationIterationCount: 1,
    animationTimingFunction: "ease-in",
    animationDuration: "2s",
  },
  fadeOut: {
    opacity: 0,
    animationName: "$fadeOut",
    animationIterationCount: 1,
    animationTimingFunction: "ease-out",
    animationDuration: "2s",
  },
});

const Footer = ({ containerStyles }) => {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText("hello@julissa.zavala.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log(err);
      if (inputRef.current) {
        inputRef.current.select();
        inputRef.current.setSelectionRange(0, 99999);
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <footer className={classes.footerContainer} style={containerStyles}>
      <h4 className={classes.footerHeading}>Let's Connect! :)</h4>
      <section className={classes.footerLinksCopyright}>
        <section>
          <a
            href="https://www.linkedin.com/in/julissazavala/"
            target="_blank"
            className={`${classes.footerItem} ${classes.footerLinkedin}`}
          >
            LINKEDIN
          </a>
          <span>/</span>
          <a
            onClick={copyText}
            className={`${classes.footerItem} ${classes.footerEmail}`}
          >
            HELLO@JULISSA.ZAVALA.COM
            <img src={boxes} className={classes.boxesImage} />
          </a>
          {copied && (
            <>
              <div
                className={`${classes.copiedAlert} ${classes.fadeIn} ${classes.fadeOut}`}
              >
                Copied!
              </div>
              <div
                className={`${classes.arrowUp} ${classes.fadeIn} ${classes.fadeOut}`}
              ></div>
            </>
          )}
        </section>
        <span className={`${classes.footerItem} ${classes.footerCopyright}`}>
          Copyright © Julissa Zavala 2025
        </span>
      </section>
    </footer>
  );
};

export default Footer;
