import { Box } from "@mui/material";
import Layout from "./components/Layout";
import ForumCard from "./components/ForumCard/Card";
import CreatePost from "./components/CreatePost/CreatePost";
import { useEffect } from "react";
import RenderPosts from "./components/ForumCard/RenderPosts";

function App() {
  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <RenderPosts />
      </Layout>
    </>
  );
}

export default App;
