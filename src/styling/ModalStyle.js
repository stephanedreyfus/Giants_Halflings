import styled from 'styled-components';

export const ModWrapper = styled.div`
  background: white;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
  margin: 4em auto 0;
  transition: all .8s;
  width: 60%;
`;

export const ModHeader = styled.div`
  background: #263238;
  height: 40px;
  line-height: 40px;
  padding: 5px 20px;
  text-align: right;
`;

export const HeadText = styled.h3`
  color: white;
  float: left;
  margin: 0;
  padding: 0;
`;

// export const Title

// export const Body

// export const Footer

export const CloseX = styled.button`
border: 0;
self-align: right;
color: white;
background: #263238;
font-size: 1.7em;
cursor: pointer;
`;

export const ModButton = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  padding: 10px;
  background-color: #1b5e20;
  float: right;
`;

export const RulesText = styled.div`
  text-align: left;
`;
  
export const WagerButton = styled.button`
  background: coral;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  outline: none;
`;

export const WagerForm = styled.form`
  display: flex;
  justify-content: center;
`;
