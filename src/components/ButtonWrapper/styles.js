import styled from 'styled-components';

const ButtonWrapper = styled.button`
--size: 200px;
width: var(--size);
height: var(--size);
display: flex;
align-items: center;
justify-content: center;
font-size: 33px;
background: #fff;
border: 0;
padding: 0;
cursor: pointer;
outline: 0;
border-radius: 100%;
.animation {
  pointer-events: none;
}
`;


export default ButtonWrapper;