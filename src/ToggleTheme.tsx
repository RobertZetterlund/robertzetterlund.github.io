import React from 'react';

import styled, {css} from 'styled-components'

export const ToggleTheme = ({toggleTheme, theme}: {toggleTheme: () => void, theme:'light'|'dark'})=> {

    return (
        <Toggle.Container onClick={toggleTheme}>
            <Toggle.Track>
                <Toggle.Icon>💡</Toggle.Icon>
                <Toggle.Icon>🦉</Toggle.Icon>
                <Ball $light={theme==='light'} />
            </Toggle.Track>
        </Toggle.Container>
        )
}

const ballLeftCss = css`
    left:3px
`

const ballRightCss = css`
    left:37px
`

const Ball = styled.div<{$light:boolean}>`
  width:25px;
  height:25px;
  border-radius:50%;
  position:absolute;
  background-color: white;
  transition: .33s;
  ${({$light}) => $light ? ballLeftCss : ballRightCss}
`

const Toggle = {
  Container: styled.div`
    position:relative;
    &:hover ${Ball} {
        box-shadow: 0 0 3px 2px #16C172;
    }
    cursor:pointer;
  `,
  Icon: styled.div`
    align-items: center;
    display: flex;
    height: 8px;
    justify-content: center;
    width: 8px;
  `,
  Track: styled.div`
    border-radius:20px;
    background-color:gray;
    width:40px;
    height:30px;
    display:flex;
    justify-content:space-between;
    padding: 0 12px;
    align-items:center;
    ` 
}


