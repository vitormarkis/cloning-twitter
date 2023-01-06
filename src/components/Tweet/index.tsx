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
    ImagemContent,
 } from './styles';

 import InteractIcons from '../InteractIcons';

const Tweet: React.FC = () => {
  return (
    <Container>

        <Retweeted>
            <RetweetedLogo />
            Você retweetou
        </Retweeted>

        <Body>
            <Avatar />
            
            <Content>
                <Header>
                    <strong>Nomad Kenya</strong>
                    <span>@nomadkenyaspots</span>
                    <Dot />
                    <time>06 de jan</time>
                </Header>

                <Description>Um dos lugares mais lindos que já fui!</Description>

                <ImagemContent />

                <InteractIcons />
            </Content>
        </Body>
        
        
    </Container>
  );
}

export default Tweet;