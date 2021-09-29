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

  export const GoBackButton = styled.button`
    padding: 4px 8px;
    border-radius: 2px;
    background-color: #b86b82;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0px;
    /* margin-right: auto; */
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    line-height: 18px;
    font-style: normal;
    font-weight: 500;
    min-width: 100px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      &:hover, focus {
        background-color: #a5a1a4;
      }
`