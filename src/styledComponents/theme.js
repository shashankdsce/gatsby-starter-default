import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 25px;
  background: #fdcc08;
  color: #000000;
  font-weight: bold;
  font-size: 14px;
  border: none;
  font-family: sans-serif;
  filter: ${({ disabled }) => (disabled ? 'grayscale(1)' : 'hue-rotate(0deg)')};
  transition: filter 300ms linear;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:focus,
  &:hover {
    filter: ${({ disabled }) => !disabled && 'hue-rotate(45deg)'};
  }
`;
