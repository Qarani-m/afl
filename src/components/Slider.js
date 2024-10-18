import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { hero } from '../DummyData'
import {mobile} from '../Responsive'

const Container = styled.div`
    margin: auto;
    width: 1600px;
    max-width: 90%;
    display: flex;
    flex-direction:column;
    align-items: center;
    margin-bottom: 100px;
    /* ${mobile({
        display: "none",
    })}  */
    
`
const ImageWrapper = styled.div`
    width: 100%;    
    max-height: 65vh;
    max-height: 65dvh;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    margin-bottom: 20px;
    object-position: center;
`

const Info = styled.div`
    width: 1100px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
    @media only screen and (max-width: 900px) {
        align-items: flex-start
    }
`
const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 10px;
    font-family: 'Alfa Slab One', cursive;
    @media only screen and (max-width: 900px) {
        font-size: 20px;
    }
`
const Description = styled.span`
    font-family: 'Hanken Grotesk', sans-serif;
    margin-bottom: 15px;
`
const Button = styled.button`
    margin-bottom: 5px;
    font-family: 'Hanken Grotesk', sans-serif;
    border-radius: 2vmax;
    background-color: black;
    color: white;
    padding: 10px;
    

`

function Slider() {
    const navigate = useNavigate();
    const index = Math.floor(Math.random() * 8) + 1
    const heroInfo = hero[index]
    console.log(hero)



  return (
    <Container>
        <ImageWrapper>
            <Image src='https://static.wixstatic.com/media/8dffa5_8cb81cd5e60d49c7b5e27779fa2d0538~mv2.jpg/v1/crop/x_87,y_0,w_2146,h_1960/fill/w_365,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/canopy.jpg'/>
        </ImageWrapper>
        <Info>
            <Title>{heroInfo.title}</Title>
            <Description>{heroInfo.description}</Description>
            <Button onClick={() =>navigate("products/all")}>{heroInfo.cta}</Button>
        </Info>
    </Container>
  )
}

export default Slider