import { ReactNode } from 'react';

export interface IALinkProps {
    leftSection?: ReactNode;
    className?: string;
    href: string;
    label?: string;
    variant?: 'secondary' | 'primary';
}
