import React, { useRef, useEffect } from "react";
import {
  useLocation,
  Switch,
  BrowserRouter as Router,
  Route,
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
          </Switch>
        </Router>
      )}
    />
  );
};

export default App;
