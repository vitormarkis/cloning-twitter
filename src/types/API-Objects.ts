export type DetailsProps = {
  from: string;
  birth: string;
};

export type FollowageProps = {
  followers: string;
  following: string;
};

export interface UserdataProps {
  uuid: number;
  name: string;
  username: string;
  avatar: string;
  banner: string;
  bio: string;
  details: DetailsProps;
  followage: FollowageProps;
}

export type YourInteractionProps = {
  like: boolean;
  retweet: boolean;
};

export type PostDataProps = {
  views: number | null;
  comments: number | null;
  retweets: number | null;
  likes: number | null;
};

export interface PostsProps {
  id: number;
  username: string;
  media_url: string;
  date: string;
  post_data: PostDataProps;
  your_interaction: YourInteractionProps;
}

export type add_TweetProps = {
  name: string;
  avatar: string;
};

export interface PostsProps {
  id: number;
  username: string;
  media_url: string;
  date: string;
  post_data: PostDataProps;
  your_interaction: YourInteractionProps;
}
