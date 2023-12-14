import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function CreatePost() {
  const [inputText, setInputText] = useState("");
  const [inputImage, setInputImage] = useState();

  function selectImage() {}
  function uploadPost() {
    if (!inputText && !inputImage) {
      //avoid upload if both the fields are empty
      return;
    }
  }
  return (
    <Card
      sx={{
        width: 800,
        borderRadius: 8,
        p: 2,
        display: "flex",
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{ bgcolor: red[500], height: "70px", width: "70px" }}
        aria-label="recipe"
      >
        R
      </Avatar>
      <Box
        sx={{
          background: "#F1EFEF",
          width: "100%",
          borderRadius: 8,
          height: "55px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          px: 3,
        }}
      >
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="custom-input-field"
        />
        <IconButton aria-label="settings">
          <AddPhotoAlternateIcon />
        </IconButton>
      </Box>
      <Button
        sx={{
          px: 8,
          py: 2,
          borderRadius: 8,
        }}
        variant="contained"
      >
        Post
      </Button>
    </Card>
  );
}
