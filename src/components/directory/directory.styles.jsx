import styled from 'styled-components';

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    align-items: center;
    display: grid;
    grid-template-columns: 1.5fr;
    grid-gap: 15px;
`;