'use client';

import React, { FC } from 'react';
import { Image, Paper } from '@mantine/core';
import styles from './ad.module.scss';
import { Sponsored } from '@/components';
import { IAdProps } from './ad.props';

export const Ad: FC<IAdProps> = ({ showSponsored, banners, ...props }) => (
    <Paper radius="lg" mt="md" variant="outlined" {...props}>
        <div className={styles.container}>
            {banners.map((banner) => (
                <div className={styles.content} key={banner}>
                    <Sponsored show={showSponsored} />
                    <Image className={styles.img} radius="lg" src={banner} />
                </div>
            ))}
        </div>
    </Paper>
);
