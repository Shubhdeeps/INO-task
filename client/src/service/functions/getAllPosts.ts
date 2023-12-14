import { IPost } from "../../models/Post.model";
import { firestore } from "../firebaseConfig";

export async function getAllPosts(lastPost?: IPost) {
  try {
    let postsDocsQuery = firestore
      .collection("posts")
      .orderBy("postedAtTimestamp", "desc");

    if (lastPost) {
      postsDocsQuery = postsDocsQuery.startAfter(lastPost.postedAtTimestamp);
    }
    const postsDocs = await postsDocsQuery.limit(10).get();
    return postsDocs.docs.map((postDoc) => postDoc.data() as IPost);
  } catch (e) {
    console.log(e);
    return [];
  }
}
