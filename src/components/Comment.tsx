"use client";
export default function Comment({
  ImagePath,
  username,
  commentTitle,
  likes,
  replies,
}) {
  return (your code for Comment component here ...
    
    
      {/* You can use map-loop to render Reply component here */}
      {replies.map((com,index) => (
          <Reply 
            key = {index}
            userImagePath = {com.userImagePath}
            username = {com.username}
            commentText = {com.replyText}
            likeNum = {com.likeNum}
            replies = {com.replies}
          />
        ))}
    </div>
  );
}
