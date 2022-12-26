import {FC} from "react";
import styled from "styled-components";


export const GoodsItem = () => {

    return (
        <StyledItem>
            <StyledImg src="//image.msscdn.net/images/goods_img/20221221/2992199/2992199_1_500.jpg?t=20221221150812" />
            <StyledTitle>
                <strong>브랜드명</strong>
                상품명
            </StyledTitle>
        </StyledItem>
    );
};
const StyledItem = styled.div`
  width: 50%;
  height: auto;
  border: 1px solid red;
`;
const StyledImg = styled.img`
  border-radius: 4px;
  display: block;
  width: 100%;
  height: 100%;
`;
const StyledTitle = styled.div`
    font-size: 14px;
    strong {font-size: 12px;}
`;