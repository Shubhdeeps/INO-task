import { IPost } from "../../models/Post.model";
import { firestore } from "../firebaseConfig";

export async function getAllPosts() {
  try {
    const postsDocs = await firestore
      .collection("posts")
      .orderBy("postedAt", "desc")
      .get();
    return postsDocs.docs.map((postDoc) => postDoc.data() as IPost);
  } catch (e) {
    console.log(e);
    return [];
  }
}
