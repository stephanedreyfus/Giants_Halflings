import styled from 'styled-components';

// Styled div for Dice element
export const DiceDiv = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Styled button that is a "Die"
export const DieBtn = styled.button`
font-size: 25px;
  display: inline-block;
  padding: 0.5em 0.8em;
  font-family: monospace;
  font-weight: bold;
  background-color: ${props => props.locked ? "darkred" : "red"};
  color: white;
  margin-right: 1em;
`;
