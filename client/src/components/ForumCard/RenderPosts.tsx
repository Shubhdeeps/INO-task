import React, { useEffect, useState } from "react";
import { IPost } from "../../models/Post.model";
import { getAllPosts } from "../../service/functions/getAllPosts";
import { Box, Button } from "@mui/material";
import CreatePost from "../CreatePost/CreatePost";
import ForumCard from "./Card";

export default function RenderPosts() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [fetch, setFetch] = useState(0);
  const [noMorePosts, setNoMorePosts] = useState(false);
  useEffect(() => {
    (async () => {
      const _posts = await getAllPosts();
      setPosts(_posts);
      if (_posts.length < 9) {
        setNoMorePosts(true);
      }
    })();
  }, [fetch]);
  console.log(posts);

  async function handleLoadMore() {
    const lastPostDate = posts[posts.length - 1].postedAt;
    const _posts = await getAllPosts(lastPostDate);
    if (_posts.length < 9) {
      setNoMorePosts(true);
    }
    setPosts((prev) => [...prev, ...posts]);
  }
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
        <CreatePost setFetch={setFetch} />
        {posts.map((post) => {
          return (
            <React.Fragment key={post.uid}>
              <ForumCard post={post} setFetch={setFetch} />
            </React.Fragment>
          );
        })}
        <Button disabled={noMorePosts} onClick={handleLoadMore}>
          {noMorePosts ? "No more posts" : "Load more"}
        </Button>
      </Box>
    </>
  );
}
