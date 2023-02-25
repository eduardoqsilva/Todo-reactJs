import styled from "styled-components";


interface BackgroundStyledType {
  backgroundUrl: string
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

      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      
      background-image: 
       ${(props) => props.thems ? `linear-gradient(0deg, rgba(0,0,0,0.5)
        0%, rgba(0,0,0,0) 100%),` : '' }  
        url(${(props) => props.backgroundUrl});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      filter: contrast(1);
      filter: saturate(1);
      /* filter: grayscale(1); */
    }
`