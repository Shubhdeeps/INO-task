import Layout from "./components/Layout";
import { useEffect } from "react";
import RenderPosts from "./components/ForumCard/RenderPosts";
import { auth } from "./service/firebaseConfig";
import { createNewUser } from "./service/functions/createNewUser";

function App() {
  useEffect(() => {
    (async () => {
      //log in anonymously
      await auth.signInAnonymously();
      //assing random username
      if (!auth.currentUser?.displayName) {
        createNewUser();
      }
    })();
  }, []);
  return (
    <>
      <Layout>
        <RenderPosts />
      </Layout>
    </>
  );
}

export default App;
