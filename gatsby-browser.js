import ReactGA from 'react-ga';
ReactGA.initialize('');

exports.onRouteUpdate = (state, page, pages) => {
    ReactGA.set({page: state.pathname});
    ReactGA.pageview(state.pathname);
};
