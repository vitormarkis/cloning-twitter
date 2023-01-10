import styled from 'styled-components';
import { Rocketseat } from '../../styles/Icons'

import { AvatarProps, ImageContentProps } from './types';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 14px 16px;

    border-bottom: 1px solid var(--outline);

    max-width: 100%;
`;

export const Retweeted = styled.div`
    display: flex;
    align-items: center;

    font-size: 13px;
    color: var(--gray);
`;

export const RetweetedLogo = styled(Rocketseat)`
    width: 16px;
    height: 16px;

    margin-left: 35px;
    margin-right: 9px;

    > path {
        fill: var(--gray);
    }

`;

export const Body = styled.div`
    display: flex;
    margin-top: 3px;

    position: relative;
`;

export const Avatar = styled.div<AvatarProps>`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--gray);
    background-image: ${props => (props.avatar) ? `url(${props.avatar})` : 'unset'};
    background-size: cover;

    position: absolute;
    top: 0;
    left: 0;
`;  

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    padding-left: 59px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    font-size: 15px;
    white-space: nowrap;

    > strong {
        margin-right: 5px;
    }

    > span, time {
        color: var(--gray);
    }

    > strong, span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export const Dot = styled.div`
    background: var(--gray);
    width: 2px;
    height: 2px;
    margin-inline: 10px;
`;

export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px;
`;

export const ImageContent = styled.div<ImageContentProps>`
    margin-top: 12px;
    width: 100%;
    height: min(100vh, max(175px, 41vw));

    background: var(--outline);
    background-image: ${props => (props.media_url) ? `url(${props.media_url})` : 'unset'};
    background-size: cover;
    background-position: center center;
    border-radius: 14px;

    cursor: pointer;

    &:hover {
        opacity: ${props => (props.media_url) ? 'initial' : 0.7 };
    }
`;
