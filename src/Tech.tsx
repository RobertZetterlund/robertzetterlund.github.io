import React from 'react';
import styled from 'styled-components'

export const Tech = () =>  {  
  return (
        <Main>
            <div>
                I have also spent some time doing react-native.

                </div>
            <Dify />
            <JMT />
            <Otorix />
        </Main>        
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  gap:50px;
  
  padding: 0px 50px 50px 50px;

  @media(max-width:768px) {
      display:flex;
      flex-direction:column;
  } 

`



const Grid = {
    Box: styled.div`
        padding:20px;
        
        display:flex;
        flex-direction:row;
        flex-basis:50%;
        gap:20px;
        justify-content:space-between;
        border-radius: 20px;
        border: 1px solid black;
        background-color: blue;

        @media(max-width:568px) {
            flex-direction:row;
        } 
    `,
    Text: styled.div`
    
    `,
    Image: styled.img`
        max-height:37vh;
        
    `
}

const Dify = () => (
    <Grid.Box>
        <Grid.Text>
    At opera I worked on Dify
        <ul>
            <li>Redux toolkit</li>
            <li>Detox testing</li>
        </ul>
        </Grid.Text>
        <Grid.Image 
            src='https://appmarketingnews.io/wp-content/uploads/2021/03/how-dify-works.ed38dd42f532.png'
            alt='Dify cashback'/>
    </Grid.Box>
)

const JMT = () => (
    <Grid.Box>
        <Grid.Text>
        With my classmate Markus Pettersson, I created and sold JMT Rapport to a client.
        <ul>
            <li>Complete ownership over product and time spent</li>
            <li>Rendering of components and forms with reducer pattern with data hosted on firebase</li>
        </ul>
        </Grid.Text>
        <Grid.Image 
        src='https://play-lh.googleusercontent.com/YIiX9MHVd8z0xBdqnl_YWanCVFaE59aEHnKH598pwel2iTYctyJU8uEGYXwrCerojQ=w720-h310-rw'
        alt='JMT Åkeri'/>
    </Grid.Box>
)

const Otorix = () => (
    <Grid.Box>
        <Grid.Text>
    Summer 2019 I worked at Otorix.
        <ul>
            <li>Firmware</li>
            <li>Native Bridging in Android</li>
        </ul>
        </Grid.Text>
        <Grid.Image 
        src='https://user-images.githubusercontent.com/31474146/146623191-497d61b4-4051-4ff0-bde4-360dc9f50bbe.jpeg'
        alt='Otorix'/>
    </Grid.Box>
)


const Education = () => (
    <Grid.Box>
        I can write whatever I want here.
    </Grid.Box>
)



/* 
I have also spent some time doing mobile development, 
At Opera I worked on Dify.
At Otorix I created an app for configuring hearing aids.
With my friend Markus Pettersson I co-created an app for sending event-reports.
*/