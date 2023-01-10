export type ImageContentProps = {
  media_url: string;
};

export type AvatarProps = {
  avatar: string;
};

export type PostDataProps = {
  views: string;
  comments: number;
  retweets: number;
  likes: number;
};

export type YourInteractionProps = {
  like: boolean;
  retweet: boolean;
};

export interface TweetProps {
  id: number;
  name: string;
  username: string;
  text: string;
  avatar: string;
  media_url: string;
  date: string;
  post_data: PostDataProps;
  your_interaction: YourInteractionProps;
}
