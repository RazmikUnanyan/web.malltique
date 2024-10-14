import React, { FC } from 'react';
import {ActionIcon, Badge, Card, CardSection, Group, Image, Rating, Text} from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { ISellCardProps } from './productCard.props';
import styles from './productCard.module.scss';

export const ProductCard: FC<ISellCardProps> = ({ imgUrl }) => (
    <Card radius="lg">
        <CardSection>
            <Image
              src={imgUrl}
              h={250}
              radius="md"
            />
            <Group>
                <Rating fractions={4} defaultValue={3.75} />
                <Text fw={500}>4</Text>
            </Group>
            <Text fw={500}>Loveseat Sofa</Text>
            <Group>
                <Text fw={500}>900$</Text>
                <Text fw={500} c="dimmed" td="line-through">1000$</Text>
            </Group>
        </CardSection>
    </Card>
);
