import { serverTimestamp } from "../firebaseConfig";

export function secondsToString(_seconds: number) {
  const seconds = serverTimestamp.now().seconds - _seconds;
  if (seconds < 60) {
    return `< 1 minute ago`;
  }
  if (seconds < 3600) {
    return `${Math.round(seconds / 60)} minutes ago`;
  }
  if (seconds < 24 * 3600) {
    return `${Math.round(seconds / 3600)} hours ago`;
  }
  if (seconds < 30 * 24 * 3600) {
    return `${Math.round(seconds / (24 * 3600))} days ago`;
  }
  return `${Math.round(seconds / (24 * 3600 * 30))} months ago`;
}
