import { createRoot } from 'react-dom/client';
import { Router, Route } from 'wouter';

import App from './App';
import ArticlePage from './pages/Article';

import './index.css';

function BlogOnly() {
	return (
		<div className="min-h-screen bg-white font-sans antialiased">
			<App />
		</div>
	);
}

createRoot(document.getElementById('root')!).render(
	<Router>
		<Route path="/" component={App} />
		<Route path="/blog" component={BlogOnly} />
		<Route path="/blog/:slug" component={ArticlePage} />
	</Router>
);
