import React, { useRef, useEffect } from "react";
import {
  useLocation,
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import TableOfContents from "./pages/TableOfContents";
import Videos from "./pages/Videos";
import whyOrthodox from "./pages/subpagesvideos/whyOrthodox";
import criticalDoctrines from "./pages/subpagesvideos/criticalDoctrines";
import fallenNature from "./pages/subpagesvideos/fallenNature";
import orthodoxy from "./pages/subpagesslides/orthodoxy";
import theology from "./pages/subpagesslides/theology";
import apologetics from "./pages/subpagesslides/apologetics";
import EvidenceOfChrist from "./pages/subpagesslides/googleslides/evidenceOfChrist";
import IHaveADream from "./pages/subpagesslides/googleslides/iHaveADream";
import ApoloTalkSeries from "./pages/subpagesslides/googleslides/apoloTalkSeries";
import ApoloPartOne from "./pages/subpagesslides/googleslides/ApoloTalkSeries/ApoloPartOne";
import ApoloPartTwo from "./pages/subpagesslides/googleslides/ApoloTalkSeries/ApoloPartTwo";
import ApoloPartThree from "./pages/subpagesslides/googleslides/ApoloTalkSeries/ApoloPartThree";
import pageNotFound from "./pages/404";
import AboutUs from "./pages/AboutUs";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} layout={LayoutDefault} />
            <Route
              exact
              path="/tableofcontents"
              component={TableOfContents}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/videos"
              component={Videos}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/aboutus"
              component={AboutUs}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/videos/whyorthodox"
              component={whyOrthodox}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/videos/8criticaldoctrines"
              component={criticalDoctrines}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/videos/fallennature"
              component={fallenNature}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/tableofcontents/orthodoxy"
              component={orthodoxy}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/tableofcontents/theology"
              component={theology}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/tableofcontents/apologetics"
              component={apologetics}
              layout={LayoutDefault}
            />
            {/* GOOGLE SLIDE PRESENTAITIONS */}
            <Route
              exact
              path="/tableofcontents/evidenceofchrist"
              component={EvidenceOfChrist}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/tableofcontents/ihaveadream"
              component={IHaveADream}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/tableofcontents/apolotalkseries"
              component={ApoloTalkSeries}
              layout={LayoutDefault}
            />
            {/* APOLO SERIES */}
            <Route
              exact
              path="/tableofcontents/apolotalkseries/apolotalkpart1"
              component={ApoloPartOne}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/tableofcontents/apolotalkseries/apolotalkpart2"
              component={ApoloPartTwo}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/tableofcontents/apolotalkseries/apolotalkpart3"
              component={ApoloPartThree}
              layout={LayoutDefault}
            />
            {/* 404 PAGE */}
            <Route
              exact
              path="/404"
              component={pageNotFound}
              layout={LayoutDefault}
            />
            <Redirect to="/404" />
          </Switch>
        </Router>
      )}
    />
  );
};

export default App;
