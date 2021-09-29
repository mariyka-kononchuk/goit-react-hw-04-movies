import styled from '@emotion/styled'

  export const List = styled.ul`
    margin:0;
    margin-top:10px;
    padding:0;
    display: grid;
    width: 1000px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 210px;
    grid-gap: 12px; 
    padding: 0;
    list-style: none;  
  `
  export const Image = styled.img`
    margin-bottom:6px;
    margin-right: 20px;
    width: 100px;
  `
  export const Name = styled.p`
    margin-bottom: 5px;

    font-weight: 600;
    font-size: 18px;
    line-height: 1.175;
    color: #b86b82; 
  `

  export const Character = styled.p`
    margin-bottom: 5px;

    font-weight: 600;
    font-size: 14px;
    line-height: 1.175;
    color: #504c4c; 
  `

   export const CharacterStyle = styled.span`
  
    font-style: italic;
  `