/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
// sections for this page
import SectionDescription from "./Sections/SectionDescription";
import SectionRuumPricing from "./Sections/SectionRuumPricing";


import presentationStyle from "../../assets/jss/material-kit-pro-react/views/presentationStyle.js";


const useStyles = makeStyles(presentationStyle);

export default function landing() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="RUUM Media"
        links={<HeaderLinks dropdownHoverColor="transparent" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "#ffffff"
        }}
      />
      <Parallax
        image={require("../../assets/img/homepage_background.png")}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  RUUM | media 
                  <span className={classes.proBadge}>PRO</span>
                </h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        {/* <SectionComponents /> */}
        {/* <SectionCards /> */}
        {/* <SectionContent /> */}
        <SectionRuumPricing />
        {/* <SectionSections /> */}
        {/* <SectionExamples /> */}
        {/* <SectionFreeDemo /> */}
        {/* <SectionOverview /> */}
      </div>
      {/* <SectionPricing /> */}
      <Footer
        theme="white"
        content={
          <div>
            <div className={classes.left}>
              <a
                href="/"
                target="_blank"
                className={classes.footerBrand}
              >
                RUUM | media
              </a>
            </div>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                {/* <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem> */}
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="/about-us"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                {/* <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem> */}
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href="/"
                    target="/"
                    color="twitter"
                    justIcon
                    simple
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="/"
                    target="/"
                    color="dribbble"
                    justIcon
                    simple
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="/"
                    target="/"
                    color="instagram"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
}
