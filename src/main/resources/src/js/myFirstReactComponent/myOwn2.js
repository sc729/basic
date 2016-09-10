/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';


var Something = React.createClass({
	loadTrFromServer : function(){
		$.support.cors = true;
		$.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            data : {trName : this.state.inputData},
            success: function(receivedData) {
                this.setState({trList: receivedData._embedded.trs || []});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
	},
	getInitialState : function(){
		return {
			inputData : "nodata",
			trList : []
		}
	},
	componentDidMount : function(){
		//this.loadTrFromServer();
	},
	handleInput : function(inputData){
		
		if(!inputData || inputData.length <3 ){
			this.setState({trList : []});
			return;
		}else{
			this.setState({inputData : inputData});
			this.loadTrFromServer();
		}
		
	},
	render : function(){
		var injectedTitle = this.props.title;
		return (
			<div>
				<h1>아오짱나  zz</h1>
				<h1>{injectedTitle}</h1>
				<div className="row">
					<InputField onChange={this.handleInput}/>
				</div>
				<ShowField inputValue={this.state.data}/>
				<TRList list={this.state.trList} />
			</div>
		);
	}
});

var ShowField = React.createClass({
	render : function(){
		var style = {
			backgroundColor : 'yellow',
			size : '180%'
		};
		if(!this.props.inputValue || this.props.inputValue.length < 3){
			style.color = 'red'
		}
		return(
			<div>
				<blockquote style={style}>
					<h1>{this.props.inputValue}</h1>
				</blockquote>
			</div>
		);
	}
});

var TRList = React.createClass({
	render : function(){

		return(
			<div>
				{this.props.list.map(
							tr=>{ return <Tr trName={tr.trName} key={tr.trName} trPurpose={tr.trPurpose} /> }
						)
				}
			</div>
		);
	}
});


var Tr = React.createClass({
	render : function(){
		let style = {
			display : 'inline-block',
			marginRight: '10px'
		};
		return(
			<div style={style}>
				<span>{this.props.trName+'(' + this.props.trPurpose +')'}</span>
			</div>
		);
	}
});

var InputField = React.createClass({
	handleInputValueChange : function(){
		this.props.onChange(this.refs.inputValue.value);
		return;
	},
	render : function(){
		return (
			<div>
				<input type="text" ref="inputValue" onChange={this.handleInputValueChange} />
			</div>
		);
	}
});

ReactDOM.render(
	<Something url='/trs/search/findByTrNameIgnoreCaseContaining' title="new Tr search" />,document.getElementById('content')
);


