import { Box } from "@mui/material";
import Layout from "./components/Layout";
import ForumCard from "./components/ForumCard/Card";

function App() {
  return (
    <>
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
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
