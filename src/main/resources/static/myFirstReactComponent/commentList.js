/**
 * Created by Suh on 2016-08-27.
 */

var CommentBox = React.createClass({
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data._embedded.comments});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleCommentSubmit: function(comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url,
            contentType: 'application/json',
            dataType: 'json',
            type: 'POST',
            data: JSON.stringify(comment),
            success: function(data) {//뱉어주는거 없음
                //this.setState({data: data._embedded.comments});
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({data: comments});
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    //로딩 -> 실행
    getInitialState: function() {
        return {data: []};
    },

    //로딩 -> 랜더링 -> 실행
    componentDidMount: function() {
        this.loadCommentsFromServer();
        console.log(this.props.exp1);
        console.log(this.props.exp2);
        console.log(this.props.exp3);
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>댓글</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var Comment = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },

    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.refs.author.value = '';
        this.refs.text.value = '';
        return;
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="이름" ref="author" />
                <input type="text" placeholder="이름을 입력하세요..." ref="text" />
                <input type="submit" value="올리기" />
            </form>
        );
    }
});

ReactDOM.render(
    <CommentBox url="/comments" pollInterval={2000} exp1="iii" exp2={'222'} exp3={3000}/>,
    //{안에는 숫자만가능} '따옴표안에는 문자가능'
    document.getElementById('content')
    //<CommentBox data={data} />,
    //document.getElementById('content')
);

