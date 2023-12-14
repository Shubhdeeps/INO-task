import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IPost } from "../../models/Post.model";
import { secondsToString } from "../../service/functions/secondsToString";
import { likedThePost } from "../../service/functions/ReactOnAPost";
import { auth } from "../../service/firebaseConfig";
import { useState } from "react";

export default function ForumCard({ post }: { post: IPost }) {
  const { authorUserName, imageURL, text, postedAt, uid, likedBy } = post;
  const authId = auth.currentUser?.uid || "";

  const [likedByCurrUser, setLikeByCurrUser] = useState(() =>
    likedBy.includes(authId)
  );
  function handleLikePost() {
    likedThePost(uid, authId, likedByCurrUser ? "unlike" : "like");
    setLikeByCurrUser((prev) => !prev);
  }
  return (
    <Card sx={{ width: 800, borderRadius: 8, p: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {authorUserName && authorUserName.split("")[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={authorUserName}
        subheader={secondsToString(postedAt)}
      />
      {imageURL && (
        <CardMedia
          sx={{
            borderRadius: 8,
          }}
          component="img"
          height="194"
          image={imageURL}
          alt="Paella dish"
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleLikePost}
          color={likedByCurrUser ? "error" : "default"}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}
