import React from 'react';
import { PostDataProps } from '../../types';
import InteractIcon from '../InteractIcon';

import { Container, Icons } from './styles';

const InteractIcons: React.FC<PostDataProps> = ({ views, comments, likes, retweets }) => {
  return (
    <Container>
      <Icons>
        <InteractIcon icon='views'>   {views    ? <p>{views}   </p> : ''}</InteractIcon>
        <InteractIcon icon='comments'>{comments ? <p>{comments}</p> : ''}</InteractIcon>
        <InteractIcon icon='retweets'>{retweets ? <p>{retweets}</p> : ''}</InteractIcon>
        <InteractIcon icon='likes'>   {likes    ? <p>{likes}   </p> : ''}</InteractIcon>
        <InteractIcon icon='share' />
      </Icons>
    </Container>
  );
};

export default InteractIcons;
