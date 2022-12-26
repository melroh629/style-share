import {FC} from "react";
import styled from 'styled-components';
import {GoodsItem} from "./GoodsItem";

export const GoodsListContainer = () => {
    return (
        <StyledContainer>
            <GoodsItem />
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
  margin: 0 auto;
  border: 1px solid blue;
  min-width: 320px;
  max-width: 768px;
`;