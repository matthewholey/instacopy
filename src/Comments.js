import React, {Component} from 'react';

class Comments extends Component {
	render() {
		return (
			<div className="Comments">
				<form>
					<div className="commentsButtons">
						<a>
							<span>Like</span>
						</a>
						<a>
							<span>Comment</span>
						</a>
						<a>
							<span>Save</span>
						</a>
					</div>
					<div className="likeCount">Like Count</div>
					<div>
						<ul>
							<li className="comment">
								<span><strong>comment.username</strong></span> <span>Here is a comment</span>
							</li>
							<li className="comment">
								<span><strong>comment.username</strong></span> <span>Here is a comment</span>
							</li>
							<div className="comment">
								<span><strong>comment.username</strong></span> <span>Here is a comment</span>
							</li>
							<li className="comment">
								<span><strong>comment.username</strong></span> <span>Here is a comment</span>
							</li>
						<ul>
					</div>
				</form>
			</div>
		);
	}
}

export default Comments;