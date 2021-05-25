/**
 * A reddit user
 * @public
 */
export interface IUser {
  id: number;
  username: string;
  name: string;
}

export interface ISubreddit {
  id: string;
  display_name: string;
  display_name_prefixed: string;
  // thumbnail
  icon_img: string;
  // backup thumbnail
  community_icon: string;
  banner_img: string;
  banner_background_image: string;
}
