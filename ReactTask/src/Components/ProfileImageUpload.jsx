import React, { useRef, useState } from "react";
import "./ProfileImageUpload.css";

function ProfileImageUpload() {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [imgUrl, setImageUrl] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);

  const inputRef = useRef(null);
  const commentRef = useRef(null);

  const handleInputClick = (e) => {
    const file = e.target.files[0];

    if (file) {
      const preview = URL.createObjectURL(file);

      setImageUrl(preview);
      setIsImageUploaded(true);
    }
  };

  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
  };

  const handleComment = () => {
    const data = commentRef.current.value;

    if (data.trim() === "") return;

    setComments([...comments, data]);

    commentRef.current.value = "";
  };

  return (
    <div className="container">
      <h2 className="title">
        Profile Image Upload with Like & Comment Section
      </h2>

      <input
        type="file"
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={handleInputClick}
      />

      {isImageUploaded ? (
        <img
          src={imgUrl}
          alt="User Selected"
          className="previewImage"
          onClick={() => inputRef.current.click()}
        />
      ) : (
        <div
          className="Imagecontainer"
          onClick={() => inputRef.current.click()}
        >
          Upload the Image
        </div>
      )}

      <button
        onClick={handleLike}
        className="likeBtn"
        style={{
          backgroundColor: likeCount > 0 ? "red" : "black",
        }}
      >
        ❤️ Like: {likeCount}
      </button>

      <div className="commentSection">
        <input
          type="text"
          name="comment"
          placeholder="Enter a comment"
          ref={commentRef}
          className="commentInput"
        />

        <button onClick={handleComment} className="commentBtn">
          Add Comment
        </button>
      </div>

      <ul className="commentList">
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileImageUpload;
