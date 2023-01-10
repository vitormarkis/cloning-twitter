import React, { useState, useEffect } from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';
import { TweetProps } from '../Tweet/types';


const Feed: React.FC = () => {
  const [posts, setPosts] = useState<TweetProps[]>([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data => {
      setPosts(data)
      console.log(posts)
    })
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
