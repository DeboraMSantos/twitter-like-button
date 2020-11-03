import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import ButtonWrapper from './components/ButtonWrapper/styles';
import GlobalStyle from './styles/global';
import animationData from './animation/dados.json';
import CountLike from './components/CountLike/styles';

export const LikeButton = () => {
  const [isLiked, setLike] = useState(false);
  const [animation, setAnimation] = useState({
    isStopped: true, 
    isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <>
      <GlobalStyle />
      <ButtonWrapper onClick={() => {
        const reverseAnimation = -1;
        const normalAnimation = 1;

        setAnimation({
          ...animation,
          isStopped: false,
          direction: animation.direction === normalAnimation 
            ? reverseAnimation
            : normalAnimation,
        })
        setLike(!isLiked);
      }}>
        <div className="animation">
          <Lottie
            options={defaultOptions}
            width={800}
            height={800}
            direction={animation.direction}
            isStopped={animation.isStopped}
            isPaused={animation.isPaused}/>
        </div>
      </ButtonWrapper>
      <CountLike>
        {isLiked ? 1 : 0}
      </CountLike>
    </>
  );
}


ReactDOM.render(
  <div>
    <LikeButton />
  </div>,
  document.getElementById('root')
);