import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SiteNavigation from './components/SiteNavigation';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';
import BlogListContainer from './containers/BlogListContainer';
import BlogPostContainer from './containers/BlogPostContainer';
import Cosmic from 'cosmicjs';

function App() {
	return (
		<React.Fragment>
			<Router>
				<GlobalStyle />
				<SiteNavigation />
				<Switch>
					<Route exact path="/" component={HomeContainer} />
					<Route exact path="/about" component={AboutContainer} />
					<Route exact path="/blog/:slug" component={BlogPostContainer} />
					<Route exact path="/blog" component={BlogListContainer} />
					<Route exact path="/contact" component={ContactContainer} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
