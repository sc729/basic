/**
 * Created by Suh on 2016-09-10.
 */
import React from 'react';
import * as Bootstrap from 'react-bootstrap';

import {Link} from 'react-router';



var NavBar = React.createClass({
    getDefaultProps(){
        return {
            activeKey : '1'
        }
    },
    _handleSelect(eventKey){
        //event.preventDefault();
        this.props.onSelect(eventKey);
    },
    render(){
        let {Nav, NavItem, NavDropdown, MenuItem} = Bootstrap;

        return (
            <Nav bsStyle="tabs" activeKey={this.props.activeKey} onSelect={this._handleSelect}>
                <NavItem className="animated bounce" eventKey="1" href="#" >
                    TR확인하기
                </NavItem>
                <NavItem eventKey="2" title="Item">todd</NavItem>
                <NavItem eventKey="5" title="test1"><Link to="/test1">test1</Link></NavItem>
                <NavItem eventKey="6" title="test2"><Link to="/test2">test2</Link></NavItem>
                <NavItem eventKey="5" title="test1"><Link to="/test1/sjh/33">test1(param1)</Link></NavItem>
                <NavItem eventKey="7" title="test1"><Link to="/test1/khy/29">test1(param2)</Link></NavItem>
                <NavItem eventKey="8" title="test2"><Link to="/test2">test2</Link></NavItem>
                <NavItem eventKey="3" disabled>유틸리티(공사중)</NavItem>
                <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                    <MenuItem eventKey="4.1">Action</MenuItem>
                    <MenuItem eventKey="4.2">Another action</MenuItem>
                    <MenuItem eventKey="4.3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4.4">Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        );
    }
});


export default NavBar;