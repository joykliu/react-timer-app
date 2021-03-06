//*************************************************
//     L O A D I N G   R E A C T
//*************************************************
const React = require('react');
const ReactDOM = require('react-dom');

//*************************************************
//     L O A D I N G  R O U T I N G
//*************************************************
// Using ES6 destrucuring
// works the same as below
//const Route = require('react-router').Route
const {Route, Router, IndexRoute, hashHistory} = require('react-router');


//*************************************************
//     L O A D I N G  C O M P O N E N T S
//*************************************************
const Main = require('Main');

//*************************************************
//     L O A D I N G  F O U N D A T I O N
//*************************************************
// use css! to package-fy css file
// use style! to chain css file to html
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//*************************************************
//     L O A D I N G  C U S T O M  C S S
//*************************************************
require('style!css!sass!applicationStyles')

//*************************************************
//     A P P  R E N D E R I N G
//*************************************************
ReactDOM.render(
    <Router history={hashHistory}>
    {/*Uses history prop with a `hashHistory` to use the `#/` combination to maintain the routes for the app`*/}
        <Route path="/" component={Main}>
        {/*calling Main component so Main renders the weather component and the navigation*/}
        </Route>
    </Router>, // renders the component to run, use the tag name created up there. passing a name attribute to serve as a prop
    document.getElementById('app')
);
