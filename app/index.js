if (module.hot) {
  module.hot.accept();
}

require('./app.tag');

riot.mount('*');
