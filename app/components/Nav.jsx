const React = require('react');
const {Link, IndexLink} = require('react-router');

// a presentational component to render stuff on the page
const Nav = () => (
    <nav className="top-bar">
        <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">
                    Timer App
                </li>
                <li>
                    <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
                </li>
                <li>
                    <Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
                </li>
            </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
                <li className="menu-text">
                    Created by <a href="http://joykliu.io" target="_blank">Hermione Granger</a>
                </li>
            </ul>
        </div>
    </nav>
)

module.exports = Nav;
