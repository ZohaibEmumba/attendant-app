import styled from "styled-components";
import bgImg from '../../assets/bg.jpg';

export const Background = styled.div` 
background: url(${bgImg});
 background-repeat: no-repeat;
 background-size: cover;
 height: 90vh;
`

export const Section = styled.section` 
    margin: 0 auto;
    padding-top: 100px;
    display: grid;
    justify-content: center;
    
    .btn-clsss{
        display: flex;
        gap: 20px;
        padding-top: 20px;
        justify-content: center;
    }
`