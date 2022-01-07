import React from "react";

function PostAComment(props) {
  return (
    <div>
      <form id="commentform">
        <input type="text" name="name" onChange={props.handleName} />
        <br />
        <textarea name="text" form="commentform" onChange={props.handleText} />
        <br />
        <select name="rating" onChange={props.handleRating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="submit" value="submit" onClick={props.handleSubmit} />
      </form>
    </div>
  );
}

export default PostAComment;
