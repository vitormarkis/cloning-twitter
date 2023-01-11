import React, { useState, useEffect } from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';
import { spreadData } from '../../scripts/functionals';
import { add_TweetProps, PostsProps, UserdataProps } from '../../types';

interface TweetProps extends PostsProps, add_TweetProps {}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Array<TweetProps | undefined>>([]);

  useEffect(() => {
    async function spreadPosts<T extends UserdataProps>() {
      const getResponses = async () => ({
        posts: (await spreadData('posts')) as Promise<PostsProps[]>,
        users: (await spreadData('users')) as Promise<Array<T>>,
      });

      const API = await getResponses();

      const resp = (await API.posts).map(async (post: PostsProps) => {
        const actualUser: T | undefined = (await API.users).find(
          (user: T) => user.username === post.username
        );

        if (actualUser) {
          const { avatar, name } = actualUser;
          const keysToBeAdd = { avatar, name };
          const finalPost = { ...post, ...keysToBeAdd };
          return finalPost;
        }
        console.log('Não existe usuário com o username: ' + post.username);
      });

      resp[0].then((a) => console.log(a));
      return resp;
    }

    (async () => {
      const postsPromises = await spreadPosts();
      const postsObjects = await Promise.all(postsPromises);
      setPosts(postsObjects);
    })();
  }, []);

  return (
    <Container>
      <Tab>Tweets</Tab>
      <Tweets>
        {posts &&
          posts.map(
            (post) =>
              post && (
                <Tweet
                  key={post.id}
                  {...post}
                />
              )
          )}
      </Tweets>
    </Container>
  );
};

export default Feed;
