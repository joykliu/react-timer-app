const React = require('react');
const Nav = require('Nav');
/* on medium size display use half screen width
** on large display use 1/3 screen width
** on small display center content
*/
const Main = props => (
    <div>
        <div>
            <div>
                <Nav/>
                <p>Main.jsx rendered</p>
                {props.children}
            </div>
        </div>
    </div>
)

module.exports = Main;
