import styled from "styled-components";

import imgNigth from "/background/background.jpg"
import imgDay from "/background/background2.jpg"

interface BackgroundStyledType {
  thems: boolean
}

export const BackgroundStyled = styled.div<BackgroundStyledType>`
    width: 100vw;
    min-height: 100vh;
    background-color: ${(props) => props.theme.backgroundColor};
    padding: 0 1rem 1rem 1rem;

    ::after {
      content: '';
      display: block;
      width: 100%;
      height: 30%;
      min-height: 280px;

      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      
      
      background-image: 
       ${(props) => props.thems ? `linear-gradient(0deg, rgba(0,0,0,0.5)
        0%, rgba(0,0,0,0) 100%),` : '' }  
        url(${(props) => props.thems ? imgNigth : imgDay});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      filter: contrast(1);
      filter: saturate(1);

      transition: all 0.1s ease-in;
    }
`