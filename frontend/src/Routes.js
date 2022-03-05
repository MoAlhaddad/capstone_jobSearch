import { Routes, Route } from "react-router-dom";
import JobList from "./containers/JobList";
import RandomJobList from "./containers/RandomJobList";
import Survey from "./components/Survey";
import FavoriteJobs from "./containers/favoriteJobs";

export default (
  <Routes>
    <Route exact path="/" component={JobList} />
    <Route path="/random-wines" component={RandomJobList} />
    <Route exact path="/survey" component={Survey} />
    <Route exact path="/favorite-wines" component={FavoriteJobs} />
  </Routes>
);
