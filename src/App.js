import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoaderComp from './components/1Common/LoaderComp';

const Home = React.lazy(()=> import("./components/Home/Home"));
const Certification = React.lazy(()=> import("./components/Certification/Certification"));
const Experience = React.lazy(()=> import("./components/Experience/Experience"));
const Projects = React.lazy(()=> import('./components/Projects/Projects'));
const Contact = React.lazy(()=> import('./components/Contact/Contact'));
const loaderComponent = LoaderComp();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Suspense fallback={loaderComponent}>
            <Route exact path="/" component={Home} />
            <Route path="/certification" component={Certification}/>
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
