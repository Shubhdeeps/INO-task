export interface IPost {
  imageURL: string | null;
  text: string;
  authorUid?: string;
  authorUserName?: string;
  postedAt: number;
  likedBy: string[];
  uid: string;
  likesCount: number;
}
