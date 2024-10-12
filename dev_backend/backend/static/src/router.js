export class Router {
	constructor(routes, notFoundPage) {
	  this.routes = routes;
	  this.notFoundPage = notFoundPage;
  
	  // Navigate to the initial path
	  this.navigate();
  
	  // Add event listener for navigation
	  window.addEventListener('popstate', () => {
		this.navigate();
	  });
	}
  
	navigate(path = window.location.pathname) {
	  console.log('Navigating to:', path);
	  const route = this.routes[path] || this.notFoundPage;
	  console.log('Route found:', route.name);
	  const page = new route();
	  page.render();
	}
  
	goTo(path) {
	  window.history.pushState({}, '', path);
	  this.navigate(path);
	}
  }