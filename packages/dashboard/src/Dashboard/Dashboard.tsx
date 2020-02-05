import React from 'react';

import * as Styled from './Dashboard.styles';
import { IDashboardProps } from './Dashboard.interfaces';

/**
 * Dashboard Component
 */
const Dashboard = ({ cards = [], onClick }: IDashboardProps) => (
  <Styled.DashboardContainer className="dashboard-container">
    {cards.map(card => (
      <Styled.DashboardCard
        key={card.title}
        className={`dashboard-card ${card.disabled ? 'disabled' : ''}`}
        onClick={!card.disabled && onClick ? () => onClick(card) : () => {}}
      >
        <Styled.DashboardTitle className="dashboard-card-title">
          {card.title}
        </Styled.DashboardTitle>
        {card.bottomLeftComponent && (
          <Styled.DashboardCardBottomLeft className="dashboard-card-bottom-left">
            {card.bottomLeftComponent}
          </Styled.DashboardCardBottomLeft>
        )}
        {card.bottomRightComponent && (
          <Styled.DashboardCardBottomRight className="dashboard-card-bottom-right">
            {card.bottomRightComponent}
          </Styled.DashboardCardBottomRight>
        )}
      </Styled.DashboardCard>
    ))}
  </Styled.DashboardContainer>
);

export default Dashboard;
