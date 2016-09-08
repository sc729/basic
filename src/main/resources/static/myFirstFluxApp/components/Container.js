

import React, { Component, PropTypes } from 'react';


class Container extends Component{

    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Container;