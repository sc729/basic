/**
 * Created by Suh on 2016-09-14.
 */

import React from 'react';
import _ from 'underscore';


var CssTest = React.createClass({
    getInitialState() {
        return {
            style: {
                color: '#ccc',
                width: 200,
                height: 100
            }
        };
    },
    onChange() {
        var style = _.clone(this.state.style);
        style.color = 'black';
        this.setState({ style: style});
    },
    render() {
        return (
            <div style={this.state.style} onClick={this.onChange}>
                <p>
                    color will be changed when you click this
                </p>
            </div>
        );
    }
});


export default CssTest;