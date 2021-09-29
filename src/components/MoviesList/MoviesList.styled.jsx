import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

export const List = styled.ul`
    margin:0;
    padding:0;
    display: grid;
    width: 1000px;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-auto-rows: 340px;
    grid-gap: 12px; 
    padding: 0;
    list-style: none;  
  `
export const Item = styled.li`
    margin-bottom:0px;
  `

export const Image = styled.img`
    margin-bottom:6px;
`
export const StyledLink = styled(Link)`
/* padding: 5px; */
    font-weight: 600;
    font-size: 14px;
    line-height: 1.175;
    color: #524e4e;
  `