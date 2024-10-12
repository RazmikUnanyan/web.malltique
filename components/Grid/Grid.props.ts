import { PaperProps } from '@mantine/core';
import { ReactNode } from 'react';

export interface IProductGridProps extends PaperProps {
    title?: string;
    buttonTitle?: string;
    onClick?: () => void;
    children: ReactNode;
}
