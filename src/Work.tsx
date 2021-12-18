import React from 'react';
import styled from 'styled-components'


export const Work = () =>  {  
  return (
        <Main>
            <GXCImage />
            <Body>
                I am currently working as a frontend web-developer at <GXCLink href='https://gxc.gg/' rel='noreferrer' target='_blank'>gxc.gg</GXCLink> at the browser company Opera.
            </Body>
                <ul>
                    <LI>Daily usage of both next.js and CRA 🏄‍♂️</LI>
                    <LI>Data management using react-query 🔄</LI>
                    <LI>Styling multiple styled-components 💅</LI>
                    <LI>Statically typed with Typescript 🤖</LI>
                </ul>
        </Main>        
  );
}

const Main = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  padding: 0 20px;
`

const GXCImage = styled.img.attrs(()=>({
    src: 'https://www-static-blogs.operacdn.com/desktop/wp-content/uploads/sites/3/2021/11/GXCmain-700x368.jpg',
    alt: 'gxc.gg promotion'
}))`
    display: flex;
    width: 100%;
    height: auto;
`

const LI = styled.li`
    text-align: left;
    color: ${({theme})=> theme.accent};
`

const Body = styled.p`
    color: ${({theme})=> theme.accent};
`

const GXCLink = styled.a`
    text-decoration:underline;
    color: ${({theme})=> theme.gxc};

    &:hover {
        color: ${({theme})=> theme.gxc}
    }
`
