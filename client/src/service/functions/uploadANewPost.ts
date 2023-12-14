import { IPost } from "../../models/Post.model";
import { firestore, serverTimestamp } from "../firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../firebaseConfig";

export async function uploadANewPost(imageURL: string | null, text?: string) {
  try {
    const newId = uuidv4();
    const newPost: IPost = {
      text: text || "",
      imageURL,
      authorUid: "shubh",
      authorUserName: "subhde",
      likedBy: [],
      likesCount: 0,
      postedAt: serverTimestamp.now().seconds,
      uid: newId,
    };
    await firestore.collection("posts").doc().set(newPost);
    return newPost;
  } catch (e) {
    console.log(e);
  }
}

// To upload an image to storage
export async function uploadImagesAndGetURL(image: File | null) {
  if (!image) {
    return null;
  }
  const newId = uuidv4();
  const extension = image.name.split(".").pop();

  let imageURL = "";
  await storage
    .ref()
    .child(`posts/${newId}.${extension}`)
    .put(image)
    .then(async (res) => {
      imageURL = await res.ref.getDownloadURL();
    });
  return imageURL;
}
