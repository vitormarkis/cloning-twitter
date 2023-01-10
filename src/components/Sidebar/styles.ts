import styled from 'styled-components';
import { Search } from '../../styles/Icons'

export const Container = styled.div`
    display: none;
    padding-top: 0px;
    @media (min-width: 1000px) {
        display: flex;
        flex-direction: column;

        width: min(399px, 100%);
    }
`;

export const SearchWrapper = styled.div`
    width: min(399px, 100%);
    display: flex;
    align-items: center;
    padding: 10px 10px;
    
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: var(--primary);

    max-height: 57px;

    &:focus-within {
        svg > path { fill: var(--twitter) }
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 39px;
    font-size: 14px;
    padding: 0 10px 0 42px;
    border-radius: 19.5px;
    top: 0;

    &::placeholder {
        color: var(--gray);
    }
    
    outline: none;

    &:focus {
        border: 1px solid var(--twitter);
    }
`;

export const SearchIcon = styled(Search)`
    position: absolute;
    top: auto;
    transform: translateX(10px);
    width: 27px;
    height: 27px;

    path { fill: var(--gray); }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 57px 24px 200px;
    margin-top: 3px;

    > div + div {
        margin-top: 15px;
    }
`;
