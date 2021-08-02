export interface IUser {
  id: number;
  username: string;
  name: string;
}

export interface ISubreddit {
  id: string;
  display_name: string;
  display_name_prefixed: string;
  icon_img: string;
  community_icon: string;
  banner_img: string;
  banner_background_image: string;
}

/**
 * @property {number} num_comments - total number of comments on a post
 * @property {string} subreddit - subreddit that post belongs to
 * @property {string} thumbnail - url of thumbnail
 * @property {number} score - upvotes minus downvotes
 * @property {string} domain - domain of url property
 */
export interface IPost {
  link_flair_text: string;
  num_comments: number;
  subreddit: string;
  thumbnail: string;
  title: string;
  total_awards_received: number;
  score: number;
  id: string;
  post_hint?: string;
  url: string;
  domain: string;
}
