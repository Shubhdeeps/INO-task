export interface IPost {
  imageURL?: string;
  text: string;
  authorUid: string;
  authorUserName: string;
  postedAt: number;
  likedBy: string[];
  likesCount: number;
}
