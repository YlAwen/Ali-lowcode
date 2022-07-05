import * as React from 'react';
import './index.scss';
export interface CardProps {
    title?: string;
    description?: string;
    btnInfo?: string;
    href?: string;
    style?: Record<string, any>;
}
declare const AwenCard: React.FC<CardProps>;
export default AwenCard;
