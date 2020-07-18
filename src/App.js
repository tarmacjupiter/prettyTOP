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

//Page Components
import SlidesPages from "./pages/subpagesslides/googleslides/slidesPages";

//Data
import data from "./site-data.json";

// Views
import Home from "./views/Home";
import TableOfContents from "./pages/TableOfContents";
import Videos from "./pages/Videos";
import orthodoxy from "./pages/subpagesslides/orthodoxy";
import theology from "./pages/subpagesslides/theology";
import apologetics from "./pages/subpagesslides/apologetics";
import pageNotFound from "./pages/404";
import AboutUs from "./pages/AboutUs";
import VideoPages from "./pages/subpagesvideos/videoPages";

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
            {/* Google Slides */}
            <Route
              exact
              path="/tableofcontents/evidenceofchrist"
              render={() => (
                <SlidesPages
                  name={data.pages.googleSlidePages.evidenceOfChrist.name}
                  youtubeurl={
                    data.pages.googleSlidePages.evidenceOfChrist.youtubeurl
                  }
                  googleslideurl={
                    data.pages.googleSlidePages.evidenceOfChrist.googleslideurl
                  }
                />
              )}
            />
            <Route
              exact
              path="/tableofcontents/ihaveadream"
              render={() => (
                <SlidesPages
                  name={data.pages.googleSlidePages.iHaveADream.name}
                  youtubeurl={
                    data.pages.googleSlidePages.iHaveADream.youtubeurl
                  }
                  googleslideurl={
                    data.pages.googleSlidePages.iHaveADream.googleslideurl
                  }
                />
              )}
            />
            {/* Google Slides End */}

            <Route
              exact
              path="/aboutus"
              component={AboutUs}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/videos/whyorthodox"
              render={() => (
                <VideoPages
                  name={data.pages.videoPages.whyOrthodox.name}
                  youtubeurl={data.pages.videoPages.whyOrthodox.youtubeurl}
                />
              )}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/videos/8criticaldoctrines"
              render={() => (
                <VideoPages
                  name={data.pages.videoPages.eightCriticalDoctrines.name}
                  youtubeurl={
                    data.pages.videoPages.eightCriticalDoctrines.youtubeurl
                  }
                />
              )}
              layout={LayoutDefault}
            />
            <Route
              exact
              path="/videos/fallennature"
              render={() => (
                <VideoPages
                  name={data.pages.videoPages.fallenNature.name}
                  youtubeurl={data.pages.videoPages.fallenNature.youtubeurl}
                />
              )}
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
