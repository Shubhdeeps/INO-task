import { IPost } from "../../models/Post.model";
import { firestore, serverTimestamp } from "../firebaseConfig";

export async function getAllPosts(lastPost?: number) {
  try {
    const startAfter = lastPost || serverTimestamp.now().seconds;
    const postsDocs = await firestore
      .collection("posts")
      .limit(10)
      .orderBy("postedAt", "desc")
      .startAfter(startAfter)
      .get();
    return postsDocs.docs.map((postDoc) => postDoc.data() as IPost);
  } catch (e) {
    console.log(e);
    return [];
  }
}
