import { useState } from "react";

const NewPost = ({ setPosts, onModalClose }) => {
  const [enteredBody, setEnteredBody] = useState([]);
  const [enteredTitle, setEnteredTitle] = useState([]);

  const handleBodyChange = (e) => {
    setEnteredBody(e.target.value);
  };

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const getSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: enteredTitle,
      body: enteredBody,
    };
    setPosts((prevPosts) => {
      return [...prevPosts, post];
    });
    onModalClose();
  };

  return (
    <form
      className="bg-purple-700 p-4 w-80  mx-auto rounded-md shadow-md"
      onSubmit={getSubmit}
    >
      <p>
        <label htmlFor="body" className="block mb-1 text-purple-100 font-bold">
          Body
        </label>
        <textarea
          id="body"
          required
          rows={3}
          className="block w-full p-2 rounded-md border-none bg-purple-300 text-gray-800"
          onChange={handleBodyChange}
        ></textarea>
      </p>
      <p>
        <label htmlFor="title" className="block mb-1 text-purple-100 font-bold">
          Your title
        </label>
        <input
          type="text"
          id="title"
          className="block w-full p-2 rounded-md border-none bg-purple-300 text-gray-800"
          onChange={handleTitleChange}
        ></input>
      </p>
      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={onModalClose}
          className="block w-full p-2 mt-4 bg-white text-purple-800 rounded-md font-bold"
        >
          Close
        </button>
        <button
          type="submit"
          className="block w-full p-2 mt-4 bg-purple-400 text-purple-800 rounded-md font-bold"
        >
          Create Post
        </button>
      </div>
    </form>
  );
};

export default NewPost;
