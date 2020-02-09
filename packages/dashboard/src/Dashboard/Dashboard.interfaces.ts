export interface IDashboardCard {
  title: string;
  bottomLeftComponent?: (() => JSX.Element) | JSX.Element | string;
  bottomRightComponent?: (() => JSX.Element) | JSX.Element | string;
  disabled?: boolean;
}

export interface IDashboardProps {
  cards?: IDashboardCard[];
  onClick?: (card: IDashboardCard) => void;
}
