/**
 * 
 */

var trs = [
   'acsw1002v',
   'acsw1000v',
   'acsv0350v',
   'cssz0380u',
   'gtbv1342c',
   'otst0380u',
   'acsv3242v'
];


var Something = React.createClass({
	getInitialState : function(){
		return {
			data : "",
			sortedData : []
		}
	},
	componentDidMount : function(){
		console.log("didmount!!!");
	},
	handleInput : function(inputData){
		this.setState({data : inputData, sortedData : []});
		
		if(!inputData || inputData.length <3 ){
			this.setState({sortedData : []});
			return;
		}
		
		var newSortedData = [];
		trs.map( tr => {
			if(tr.indexOf(inputData)!=-1){
				newSortedData.push(tr);
			}
		});
		this.setState({sortedData : newSortedData});
	},
	render : function(){
		var injectedTitle = this.props.title;
		return (
			<div>
				<h1>{injectedTitle}</h1>
				<div className="row">
					<InputField onChange={this.handleInput}/>
				</div>
				<ShowField inputValue={this.state.data}/>
				<TRList list={this.state.sortedData} />
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
		if(this.props.inputValue.length < 3){
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
							tr=>{ return <Tr trName={tr} key={tr} /> }
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
				<span>{this.props.trName}</span>
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
	<Something title="이것은 주입된 제목입니다." />,document.getElementById('content')
);