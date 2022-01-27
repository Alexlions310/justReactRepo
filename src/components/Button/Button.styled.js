import styled from 'styled-components'

export const Button = styled.button`
     background-color:#a020f0;
     color:white;
     font-weight:bold;
     font-family: sans-serif;
     margin-top:  ${({ margin }) => margin || '30px'};
     border:none;
     font-size:   ${({ fontSize }) => fontSize || '27px'};
     width:68%;
     border-radius: ${({ borderRadius }) => borderRadius || '30px'};
     padding-top:15px;
     padding-bottom:15px;
     &:hover{
         cursor:pointer;
     }
`
