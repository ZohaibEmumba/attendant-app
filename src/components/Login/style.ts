import styled from 'styled-components';
import bgImg from '../../assets/bg.jpg';

export const Wrapper =  styled.div` 
 background: url(${bgImg});
 background-repeat: no-repeat;
 background-size: cover;
 height: 100vh;
 padding-top:250px ;
`
export const Section = styled.section` 
  margin:0px auto;
  width: 50%;
  background-color: rgba(255, 255, 255, .15);   
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  padding: 100px 150px 50px 10px;
  border-radius: 10px;
  border: none;
  outline: none;

  `