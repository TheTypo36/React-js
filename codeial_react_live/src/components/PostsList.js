import React from 'react';

class PostsList extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post.id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
                  alt="user-avatar"
                />
              </div>
              <div className="post-details">
                <span className="post-author">{post.authorName}</span>
                <span className="post-time">a minute ago</span>
              </div>
            </div>
            <div className="post-content">
              <span>{post.content}</span>
              <div className="post-img">
                <img src={post.postImg} alt="post-img" />
              </div>
            </div>
            <div className="post-actions">
              <div className="post-like FivepxLeftMargin">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/126/126473.png"
                  alt="like-btn"
                />
                <span className="FivepxLeftMargin">{post.likes}</span>
              </div>
              <div className="post-comments FivepxLeftMargin">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
                  alt="comment-icon"
                />
                <span className="FivepxLeftMargin">{post.comments}</span>
              </div>
            </div>
            <div className="post-comment-box">
              <input placeholder="Start typing a comment" />
            </div>
            <div className="post-comments-list">
              <div className="post-comments-item">
                <div className="post-comments-header">
                  <span className="post-comment-author FivepxLeftMargin">
                    Billy
                  </span>
                  <span className="post-comment-time FivepxLeftMargin">
                    a minute ago
                  </span>
                  <span className="post-comment-like FivepxLeftMargin">22</span>
                </div>
                <div className="post-comment-content FivepxLeftMargin">
                  Nice post!!
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PostsList;
