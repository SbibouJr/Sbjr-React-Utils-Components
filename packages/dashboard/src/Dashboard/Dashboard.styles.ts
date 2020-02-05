import styled from 'styled-components';

const colorBackgroundHover = 'grey';
const colorBackground = '#BADA55';
const colorBorder = 'black';

export const DashboardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DashboardCard = styled.div`
  position: relative;
  margin: 20px;
  height: 200px;
  background-color: ${colorBackground};
  border: 4px ${colorBorder} solid;
  border-radius: 10px;
  width: 350px;
  max-width: 90%;
  &:hover {
    cursor: pointer;
    background-color: ${colorBackgroundHover};
  }
  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background-color: ${colorBackground};
  }
`;

export const DashboardTitle = styled.h1`
  margin: 0px;
  padding: 20px;
`;

export const DashboardCardBottomLeft = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

export const DashboardCardBottomRight = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
