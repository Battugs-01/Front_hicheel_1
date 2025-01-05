import { useState } from "react";
import MainHeader from "./components/Main-Header";
import PostList from "./components/PostList";

function App() {
  const [visibleModal, setVisibleModal] = useState(false);

  const onModalClose = () => {
    setVisibleModal(false);
  };

  const onModalOpen = () => {
    setVisibleModal(true);
  };

  console.log(visibleModal, " xxxa ");
  return (
    <>
      <MainHeader createPost={onModalOpen} />
      <main className="flex gap-4">
        <PostList visibleModal={visibleModal} onModalClose={onModalClose} />
      </main>
    </>
  );
}

export default App;
