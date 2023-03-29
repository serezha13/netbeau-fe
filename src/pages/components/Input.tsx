import styled from '@emotion/styled';

export const Input = styled.input`
    display: block;
    font-size: 1rem;
    color: #333;
    padding: 0.5rem 0;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid #ccc;
    background-color: transparent;
    outline: none;
    transition: border-color 0.2s ease-in-out;

    &:focus {
       border-color: #aaa;
    }

    &::placeholder {
       color: #999;
    }
`;