import React from 'react';
import styled from 'styled-components'
import { Body, Card, ImageContainerCss, LI, Picture, Text,Company } from './card.styled';


export const Dify = () =>  {  
  return (
         <Card>
              <Company>
                    At Opera
                </Company>
            <ImageContainer>
                <Picture src='https://gxc.gg/apple-touch-icon.png' alt='A picture of me'/>
            </ImageContainer>
            <Text>
                <Body>
                    React Native development on <GXCLink href='https://gxc.gg/' rel='noreferrer' target='_blank'>dify</GXCLink>
                </Body>
                <ul>
                    <LI>Testing with Detox 🧪</LI>
                    <LI>Redux Toolkit 🧰</LI>
                    <LI>GA and Firebase 📈</LI>
                    <LI>Typescript 🤖</LI>
                </ul>
            </Text>
        </Card>
            
  );
}


const ImageContainer = styled.div`
    ${ImageContainerCss};
    background: rgb(189, 255, 0);
    background: linear-gradient(45deg, 
        rgb(189, 255, 0), 
        #007bff, 
        rgb(230,100,101),
        rgb(189, 255, 0),
        #007bff); 
    background-size: 400% 400%;
`


const GXCLink = styled.a`
    text-decoration:underline;
    color: ${({theme})=> theme.gxc};

    &:hover {
        color: ${({theme})=> theme.gxc}
    }
`