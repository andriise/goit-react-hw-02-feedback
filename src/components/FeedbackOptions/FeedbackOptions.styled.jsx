import styled from "styled-components";
export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  gap: 10px;
`;

export const Button = styled.button`
  font-size: 14px;
  width: 100px;
  text-transform: uppercase;
  padding: 10px 0;
  border-radius: 10px;
  border-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #9a1eb0;
  }
  &:hover {
    color: #ffff;
  }
`;
