import { ReactNode } from 'react';

export interface IALinkProps {
    leftSection?: ReactNode;
    href: string;
    label?: string;
    variant?: 'secondary' | 'primary';
}
