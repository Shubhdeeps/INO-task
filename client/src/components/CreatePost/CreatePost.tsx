import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Box, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  uploadANewPost,
  uploadImagesAndGetURL,
} from "../../service/functions/uploadANewPost";
import { auth } from "../../service/firebaseConfig";

export default function CreatePost({
  setFetch,
}: {
  setFetch: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [inputText, setInputText] = useState("");
  const [inputImage, setInputImage] = useState<File | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [username, setUsername] = useState("");
  const user = auth.currentUser?.displayName || "";

  useEffect(() => {
    console.log("user found, ", user);
    if (user) {
      setUsername(user.split("")[0]);
    }
  }, [user]);

  async function handleUploadPost() {
    if (!inputText && !inputImage) {
      //avoid upload if both the fields are empty
      return;
    }

    const imageUrl = await uploadImagesAndGetURL(inputImage);

    await uploadANewPost(imageUrl, inputText);
    setFetch((prev) => prev + 1);
    setInputImage(null);
    setInputText("");
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setInputImage(e.target.files[0]);
    }
  };

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
        aria-label={username}
      >
        {username}
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
        <IconButton
          onClick={() => imageRef.current?.click()}
          aria-label="settings"
        >
          {inputImage ? (
            <img
              width="30px"
              height="auto"
              src={URL.createObjectURL(inputImage)}
              alt="art"
            />
          ) : (
            <AddPhotoAlternateIcon />
          )}
        </IconButton>
        <input
          ref={imageRef}
          type="file"
          id="file-upload"
          name="file-upload"
          className="new-file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => handleImageUpload(e)}
        />
      </Box>
      <Button
        sx={{
          px: 8,
          py: 2,
          borderRadius: 8,
        }}
        variant="contained"
        onClick={handleUploadPost}
      >
        Post
      </Button>
    </Card>
  );
}
