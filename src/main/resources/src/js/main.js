/**
 * Created by Suh on 2016-09-10.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './commonComponent/NavBar';
import CssTest from './test/CssReactStudy';
import {Grid, Row, Col, Jumbotron, PageHeader} from 'react-bootstrap';
import { Router, Route, Link, browserHistory } from 'react-router'
import FilterableProductTable from './myFirstReactComponent/ProductTable';
import _ from 'underscore';

import Test1 from './test/TestModule1';
import Test2 from './test/TestModule2';

import assign from 'object-assign';



var NoMatch = React.createClass({
    render(){
        return (
            <div>
                <h1>No match 입니다.</h1>
            </div>
        );
    }
});



var Container = React.createClass({
    getInitialState(){
        return{
            activeKey : '1'
        }
    },
    selectMenu(eventKey){
        this.setState({
            activeKey : eventKey
        });
    },
    getDefaultProps(){
      return {title : '반갑습니다. react입니다.'};
    },
    render(){

        return (
            <Grid >
                <Row>
                    <PageHeader >
                        {this.props.title}<small>react로 만드는 웹앱</small>
                    </PageHeader>
                </Row>
                <Row>
                    <NavBar onSelect={this.selectMenu} activeKey={this.state.activeKey}/>
                </Row>
                <Row className="show-grid">
                    <Col>
                        {this.props.children}
                    </Col>
                </Row>
            </Grid>
        );
    }
});
/*

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Container}>
            <Route path="pro" component={FilterableProductTable}/>
            <Route path="myOwn" component={Users}>
            <Route path="/user/:userId" component={User}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
</Router>, document.getElementById('content')
);
*/
/*
ReactDOM.render(
    <Container  />, document.getElementById('content')
);
*/

var lyrics = [
    {line: 1, words: "I'm a lumberjack and I'm okay"},
    {line: 2, words: "I sleep all night and I work all day"},
    {line: 3, words: "He's a lumberjack and he's okay"},
    {line: 4, words: "He sleeps all night and he works all day"}
];

function SomeCla(){
    return this;
}

SomeCla.prototype = {
    call(){
        return 'this is call';
    },
    show : 'this is show'
}

console.log(assign(SomeCla.prototype, {name:'종효'}, {age: 33}));


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Container}>
            <Route path="/pro" component={FilterableProductTable}/>
            <Route path="test1" component={Test1}/>
            <Route path="test1/:name/:age" component={Test1}/>
            <Route path="test2" component={Test2}/>
        </Route>
        <Route path="*" component={NoMatch} />
    </Router>, document.getElementById('content')
);
/*
*/
ReactDOM.render(
    <CssTest />, document.getElementById('study')
);
