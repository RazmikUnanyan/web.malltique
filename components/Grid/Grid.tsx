import React, { FC } from 'react';
import { Badge, Group, Text } from '@mantine/core';
import styles from './Grid.module.scss';
import { IProductGridProps } from './Grid.props';

export const Grid: FC<IProductGridProps> = ({
  title,
  onClick,
  buttonTitle,
  children,
  ...props
}) => (
  <div className={styles.container} {...props}>
    {title && (
      <Group justify="space-between" mt="md" mb="xs">
        {title && (
          <Text c="dimmed" size="lg" fw={500}>
            {title}
          </Text>
        )}
        {buttonTitle && (
          <Badge size="lg" variant="light" color="blue" onClick={onClick}>
            {buttonTitle}
          </Badge>
        )}
      </Group>
    )}
    <div className={styles.grid}>{children}</div>
  </div>
);
