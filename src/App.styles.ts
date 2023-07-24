import styles, {createGlobalStyle, styled} from 'styled-components'
import BgImage from './images/bgimg.jpg'

export const GlobalStyle = createGlobalStyle `
    html{
        height: 100%;
    }

    body{
        background-image: url(${BgImage});
        background-size: cover;
        margin:0;
        padding: 0 20px;
        display: flex;
        justify-content: center;

    } 

    *{
        box-sizing: birder-box;
        font-family: 'Catamran', sans-serif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score{
        color: #0a3539;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline;
        background-image: linear-gradient(94deg, #83b5e8,#074950);
        font-weight: 700;
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px ##5dbf94);
        font-size: 70px;
        text-align: center;
        margin: 20px;
      }

      .start, .next {
        cursor: pointer;
        background-image: linear-gradient(to right, #83b5e8, #074950);
        border: 2px solid #0a3539;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        color: #fff;
        font-size: 20px;
      }

      .start {
        max-width: 200px;
      }
`