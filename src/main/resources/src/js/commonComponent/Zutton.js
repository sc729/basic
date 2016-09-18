import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';



var Zutton =  React.createClass({

    render : function(){
        return (
            <div>
                <ButtonToolbar >
                    <Button bsStyle={'success'} onClick={this.props.onClick}>
                        {this.props.name + '/' + this.props.children}
                    </Button>
                    <Button bsStyle={'default'} onClick={this.props.onClick}>
                        {this.props.name + '/' + this.props.children}
                    </Button>
                </ButtonToolbar>
                <ButtonToolbar>
                    <Button bsStyle={'danger'}>안녕?</Button>
                    <Button bsStyle={'primary'}>안녕?</Button>
                </ButtonToolbar>
            </div>
        );
    }
});


export default Zutton;
