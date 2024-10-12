import React, { FC } from 'react';
import { ActionIcon, Badge, Card, CardSection, Group, Image, Text } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { ISellCardProps } from './productCard.props';
import styles from './productCard.module.scss';

export const ProductCard: FC<ISellCardProps> = ({ imgUrl }) => (
    <Card padding="lg" radius="lg">
        <CardSection>
            <Image
              src={imgUrl}
              h={250}
              radius="md"
            />
        </CardSection>

        <Group justify="space-between" mt="xs" mb="xs">
            <div>
                <Text size="xs" td="line-through">1000$</Text>
                <Badge variant="light" size="lg" color="pink">599$</Badge>
            </div>
            <Text fw={500} size="xs" c="dimmed">With Fjord Tours you can explore more of the magical</Text>
        </Group>
        <ActionIcon className={styles.icon} size={42} variant="white" aria-label="IconHeart">
            <IconHeart color="pink" />
        </ActionIcon>
    </Card>
);
