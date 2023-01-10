import React from 'react';

import {
  Container,
  Retweeted,
  RetweetedLogo,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
} from './styles';

import InteractIcons from '../InteractIcons';
import { TweetProps } from './types';

const Tweet: React.FC<TweetProps> = (props) => {

  return (
    <Container>

      {props.your_interaction.retweet ? (
        <Retweeted>
          <RetweetedLogo />
          Você retweetou
        </Retweeted>
      ) : (
        ''
      )}

      <Body>
        <Avatar avatar={props.avatar}/>

        <Content>
          <Header>
            <strong>{ props.name }</strong>
            <span>{ props.username }</span>
            <Dot />
            <time>{ props.date }</time>
          </Header>

          <Description>{ props.text }</Description>

          {props.media_url ? <ImageContent media_url={props.media_url}/> : ''}

          <InteractIcons {...props.post_data}/>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
