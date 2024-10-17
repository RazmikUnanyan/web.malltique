'use client';

import React, { FC } from 'react';
import { Group, Image, Text } from '@mantine/core';
import styles from './sellCard.module.scss';
import { ISellCardProps } from './sellCard.props';

export const SellCard: FC<ISellCardProps> = ({ imgUrl, ...props }) => (
  <div className={styles.container} {...props}>
    <Image alt="" src={imgUrl} h={200} />
    <Group justify="space-between" className={styles.description}>
      <Text fw={500}>BIG SELL</Text>
    </Group>
  </div>
);
