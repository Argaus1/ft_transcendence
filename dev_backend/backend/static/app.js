import { Router } from './src/router.js';
import { HomePage, RegisterPage, NotFoundPage } from './src/pages.js';

const routes = {
  '/': HomePage,
  '/register': RegisterPage,
};

const router = new Router(routes, NotFoundPage);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      history.pushState(null, null, e.target.getAttribute('data-link'));
      router.navigate();
    }
  });

  window.addEventListener('popstate', router.navigate.bind(router));
  router.navigate();
});