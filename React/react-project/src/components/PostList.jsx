import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";

const PostList = ({ visibleModal, onModalClose }) => {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <div className="mt-10">
        {!!visibleModal && (
          <Modal onClose={onModalClose}>
            <NewPost setPosts={setPosts} onModalClose={onModalClose} />
          </Modal>
        )}
      </div>

      {posts.length > 0 && (
        <ul className="list-none max-w-3xl my-4 mx-auto py-4 grid grid-cols-3 gap-4 justify-center ">
          {posts?.map((post, index) => {
            return <Post title={post.title} body={post.body} key={index} />;
          })}
          c
        </ul>
      )}

      {posts.length === 0 && (
        <p className="text-center text-xl text-gray-800 flex justify-center">
          No posts available. Create one!
        </p>
      )}
    </>
  );
};

export default PostList;
