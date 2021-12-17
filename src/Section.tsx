import React, {HtmlHTMLAttributes} from 'react';

import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'
import { pliancyCss } from './Footer';


export const Section = ({children, nextId, ...props} : HtmlHTMLAttributes<HTMLDivElement> & {nextId?:string}) => (
    <SectionContainer {...props}>
        {children}
        {nextId && <NextSection id={nextId}/>}
    </SectionContainer>
)

const NextSection = ({id}:{id:string}) => (
    <NextAnchor href={`#${id}`}>
      <FaChevronDown/>
    </NextAnchor>
)

const NextAnchor = styled.a`
    bottom:0;
    padding:20px;
    ${pliancyCss}
    position:absolute;
    margin-left:auto;
    margin-right:auto;
`

const SectionContainer = styled.section`
    min-height: 100vh;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  
`