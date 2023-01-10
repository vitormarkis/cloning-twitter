export type BannerProps = {
  banner?: string;
};

export type AvatarProps = {
  avatar?: string;
};

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
