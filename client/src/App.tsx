import { Box } from "@mui/material";
import Layout from "./components/Layout";
import ForumCard from "./components/ForumCard/Card";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
  return (
    <>
      <Layout>
        <Box
          sx={{
            border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <CreatePost />
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
          <ForumCard />
        </Box>
      </Layout>
    </>
  );
}

export default App;
