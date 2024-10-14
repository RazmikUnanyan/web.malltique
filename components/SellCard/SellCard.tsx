'use client';

import React, { FC } from 'react';
import { Badge, Group, Image, Text } from '@mantine/core';
import styles from './sellCard.module.scss';
import { ISellCardProps } from './sellCard.props';
import { SellBadge } from '@/components';

export const SellCard: FC<ISellCardProps> = ({ imgUrl, ...props }) => (
  <div className={styles.container} {...props}>
    <Image className={styles.img} alt="" src={imgUrl} />
    <Badge color="pink" className={styles.badge}>
        <SellBadge />
    </Badge>
    <Group justify="space-between" className={styles.description}>
      <Text fw={500}>BIG SELL</Text>
    </Group>
  </div>
);
