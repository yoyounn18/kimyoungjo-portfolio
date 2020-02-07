import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './App.scss';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';


const history = createBrowserHistory()

const pageTrans = 'trans toRight'
const classNames = {
  appear: `${pageTrans} appear`,
  appearActive: `${pageTrans} appear active`,
  appearDone: `${pageTrans} appear done`,
  enter: `${pageTrans} enter`,
  enterActive: `${pageTrans} enter active`,
  enterDone: `${pageTrans} enter done`,
  exit: `${pageTrans} exit`,
  exitActive: `${pageTrans} exit active`,
  exitDone: `${pageTrans} exit done`
}

function App() {
  return (
    <Router history={history} basename = {process.env.PUBLIC_URL}>
      <Route
        render={({ location }) => (
          <TransitionGroup className='transitionGroup'>
            <CSSTransition key={location.pathname} classNames={classNames} timeout={2000}>
              <Switch location={location}>
                <Route exact path="/" component={Page1} />
                <Route path="/2" component={Page2} />
                <Route path="/3" component={Page3} />
                <Route path="/4" component={Page4} />
                <Route path="/5" component={Page5} />
                <Route path="/6" component={Page6} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}

export default App;