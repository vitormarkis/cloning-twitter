import React, { useState, useEffect } from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';
import { TweetProps } from '../Tweet/types';
import { spreadData } from '../../scripts/functionals';


const Feed: React.FC = () => {
  const [posts, setPosts] = useState<TweetProps[]>([]);
  
  useEffect(() => {
    spreadData(setPosts)
  }, []);


  return (
    <Container>
      <Tab>Tweets</Tab>
      <Tweets>
        {
          posts.map(post => <Tweet key={post.id} {...post}/>)
        }
      </Tweets>
    </Container>
  );
};

export default Feed;
