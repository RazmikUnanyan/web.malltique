import React from 'react';
import Link from 'next/link';
import { IconLocation } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import styles from './headerLinks.module.scss';
import { ALink } from '@/components';

export const HeaderLinks = () => (
    <div className={styles.container}>
        <ALink variant="primary" href="#" label="Houston" leftSection={<IconLocation />} />
        <div className={styles.links}>
            <ALink
              label="career"
              variant="primary"
              href="#"
            />
            <ALink
              label="mobile app"
              variant="primary"
              href="#"
            />
            <ALink
              label="pick-up"
              variant="primary"
              href="#"
            />
            <Button
              variant="light"
              radius="xl"
              size="xs"
              color="#db1265"
              component={Link}
              href="#"
            >
                become a seller
            </Button>
        </div>
    </div>
);
