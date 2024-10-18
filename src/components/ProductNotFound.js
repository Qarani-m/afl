import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Image = styled.img`
  width: 500px;
  max-width: 100%;
  
`
const Title = styled.h3`
  font-size: 30px;
  margin: 10px 0;
  text-align: center;
`
const Desc = styled.span`
  font-size: 20px;
  font-weight: 200;
  text-align: center;
`

function ProductNotFound({title, desc}) {
    const imageURl = "https://static.wixstatic.com/media/8dffa5_71d4926b0b6941e89704cab06bbb4c18~mv2.jpg/v1/crop/x_211,y_0,w_1616,h_1476/fill/w_365,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Louvre7_JPG.jpg"
  return (
    <Container>
        <Image src={imageURl} />
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Desc>Please try again</Desc>
    </Container>
  )
}

export default ProductNotFound