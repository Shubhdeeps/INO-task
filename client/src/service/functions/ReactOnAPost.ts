import { FieldValue, firestore } from "../firebaseConfig";

export function likedThePost(
  postId: string,
  authorUid: string,
  action: "like" | "unlike"
) {
  if (action === "like") {
    firestore
      .collection("posts")
      .doc(postId)
      .update({
        likedBy: FieldValue.arrayUnion(authorUid),
      });
    return;
  }
  firestore
    .collection("posts")
    .doc(postId)
    .update({
      likedBy: FieldValue.arrayRemove(authorUid),
    });
  return;
}
