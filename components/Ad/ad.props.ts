import { PaperProps } from '@mantine/core';

export interface IAdProps extends PaperProps {
    showSponsored?: boolean;
    banners: string[];
}
