

import React, { Component, PropTypes } from 'react';


class Container extends Component{

    getInitialState(){
        return {
            a : [],
            b : []
        };
    }

    render(){
        return (
            <div>
            	<h2>thats is!!</h2>
                <h1>{this.props.title}</h1>
            </div>
        );
    }


}


export default Container;