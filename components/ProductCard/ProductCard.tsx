'use client';

import React, { FC, useState } from 'react';
import { IconHeart, IconMessage, IconShoppingCart, IconThumbUp } from '@tabler/icons-react';
import { Badge, Button, Group, Image, Rating, Text } from '@mantine/core';
import styles from './productCard.module.scss';
import { ALink } from '@/components';
import { ISellCardProps } from './productCard.props';

export const ProductCard: FC<ISellCardProps> = ({ imgUrl, isNew, isGoodPrice, percent, name, rating, prevPrice, price }) => {
  const [isSelected, setIsSelceted] = useState(false);

  return (
    <div className={styles.container}>
        <div className={styles.imgWrapper}>
            <Image src={imgUrl} h={200} radius="md" />
            <ALink className={styles.like} href="#" leftSection={<IconHeart />} variant="secondary"></ALink>
            <div className={styles.badges}>
                {isGoodPrice && <Badge leftSection={<IconThumbUp size={15} />}>Good price</Badge>}
                {isNew && <Badge color="green">new</Badge>}
                <Badge color="pink">-{percent}</Badge>
            </div>
        </div>
      <Text size="lg" fw={500}>
          {name}
      </Text>
      <Group>
        <Rating size="xs" fractions={rating} defaultValue={rating} />
        <IconMessage size={15} />
        <Text size="xs" fw={500}>
            {rating}
        </Text>
      </Group>
      <div className={styles.footer}>
        <div className={styles.price}>
          <div className={styles.prevPrice}>
            <Text size="xs" fw={500} c="dimmed" td="line-through">
                {prevPrice}
            </Text>
            <Badge variant="light">-{percent}</Badge>
          </div>
          <Text size="xl" fw={700}>
              {price}
          </Text>
        </div>
        <div className={styles.button}>
            <ALink href="#" leftSection={<IconShoppingCart />} variant="primary"></ALink>
        </div>
      </div>
    </div>
  );
};
