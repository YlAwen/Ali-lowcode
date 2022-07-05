import { Button } from '@material-ui/core';
import { createElement } from 'react';
import * as React from 'react';
import './index.scss';
import autil from 'awen/utils';

export interface CardProps {
  title?: string;
  description?: string;
  btnInfo?: string;
  href?: string;
  style?: Record<string, any>;
}

const AwenCard: React.FC<CardProps> = (props: CardProps) => {
  const { title, description, btnInfo, style: PropsStyle = {}, href } = props;
  const [style, setStyle] = React.useState(PropsStyle);
  const openPage = () => {
    autil.open(href);
  };

  return (
    <div className="awen-card" style={style}>
      <div>
        <div className="awen-card-title">{title}</div>
        <div className="awen-card-tip">{description}</div>
      </div>
      <div>
        <Button variant="outlined" onClick={openPage}>
          <span className="awen-card-btn">{btnInfo}</span>
        </Button>
      </div>
    </div>
  );
};
AwenCard.defaultProps = {
  title: 'title',
  description: 'description',
  btnInfo: 'detail',
  href: 'https://www.ylawen.com/',
};
AwenCard.displayName = 'PortalCard';
export default AwenCard;
