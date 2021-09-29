import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

export const MovieName = styled.h2`
    margin-bottom: 10px;

    font-weight: 700;
    font-size: 24px;
    line-height: 1.475;
    color: #b86b82; 
  `

export const Score = styled.h2`
    margin-bottom: 10px;

    font-weight: 600;
    font-size: 18px;
    line-height: 1.375;
    color: #524e4e; 
  `
export const OverviewTitle = styled.h2`
    margin-bottom: 5px;

    font-weight: 600;
    font-size: 18px;
    line-height: 1.375;
    color: #b86b82; 
  `
export const Overview = styled.h2`
    margin-bottom: 5px;
    width: 600px;

    font-weight: 600;
    font-size: 16px;
    line-height: 1.175;
    color: #524e4e; 
  `
export const GenresTitle = styled.h3`
    margin-bottom: 5px;
    

    font-weight: 700;
    font-size: 16px;
    line-height: 1.175;
    color: #504c4c; 
  `
export const Genres = styled.ul`
    display:flex;
    margin:0;
    padding:0;
    margin-bottom: 5px;
    width: 600px;
    list-style: none; 
    font-weight: 600;
    font-size: 16px;
    line-height: 1.175;
    color: #524e4e; 
  `
  export const GenresItem = styled.li`
   
    margin-right: 10px;
     
  `

export const DetailsWrapper = styled.div`
    display:flex;
    border-bottom: solid 1px pink;
  `

  export const InfoWrapper = styled.div`
    
    border-bottom: solid 1px pink;
  `

export const Image = styled.img`
    margin-bottom:6px;
    margin-right: 20px;
    width: 220px;
  `
  
export const InfoTitle = styled.h3`
    margin-top: 5px;
    margin-bottom: 5px;

    font-weight: 600;
    font-size: 18px;
    line-height: 1.375;
    color: #b86b82; 
  `
export const StyledLink = styled(Link)`
/* padding: 5px; */
/* display:flex; */
margin-bottom: 10px;
margin-right: 20px;
    padding: 4px 8px;
    border-radius: 2px;
    background-color: #b86b82;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    /* margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0px; */
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
    width: 80px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      &:hover, focus {
        background-color: #a5a1a4;
      }
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