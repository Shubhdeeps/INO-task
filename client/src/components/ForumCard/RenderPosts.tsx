import React, { useEffect, useState } from "react";
import { IPost } from "../../models/Post.model";
import { getAllPosts } from "../../service/functions/getAllPosts";
import { Box } from "@mui/material";
import CreatePost from "../CreatePost/CreatePost";
import ForumCard from "./Card";

export default function RenderPosts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    (async () => {
      const _posts = await getAllPosts();
      setPosts(_posts);
    })();
  }, []);
  console.log(posts);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <CreatePost />
        {posts.map((post) => {
          return (
            <React.Fragment key={post.uid}>
              <ForumCard post={post} />
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
}
