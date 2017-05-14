import React from 'react'
import {Link, IndexLink} from 'react-router'

let Navigation = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
             <ul className="vertical medium-horizontal menu" data-responsive-menu="drilldown medium-dropdown" >
                    <li className="menu-text">
                        React Timer App
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link" style={{color: "green"}}>Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/countdown" activeClassName="active-link" style={{color: "green"}}>CountDown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <span style={{color: "green"}}>Fernando</span>
                    </li>
                </ul>
            </div>            
        </div>
    );
};

module.exports = Navigation;