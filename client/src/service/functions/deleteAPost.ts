import { IPost } from "../../models/Post.model";
import { auth, firestore } from "../firebaseConfig";

export async function deleteAPost(post: IPost) {
  const currUser = auth.currentUser?.uid;
  const isCurrUserAuthor = currUser === post.authorUid;

  if (isCurrUserAuthor) {
    await firestore.collection("posts").doc(post.uid).delete();
  }
}
