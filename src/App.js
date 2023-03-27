import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Toprated from "./pages/Toprated/Toprated";
import Upcoming from "./pages/Upcoming/Upcoming";

const App = () => {
	axios.defaults.baseURL = "https://watch-easy-api.onrender.com";

	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route path="/movie/:id">
						<MovieDetail />
					</Route>
					<Route path="/upcoming-movies">
						<Upcoming />
					</Route>
					<Route path="/toprated-movies">
						<Toprated />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Layout>
		</div>
	);
};

export default App;
