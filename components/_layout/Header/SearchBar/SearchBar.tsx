import React from 'react';
import Image from 'next/image';
import {
  IconBasket,
  IconCategory2,
  IconHeart,
  IconTruckDelivery,
  IconUserCircle,
} from '@tabler/icons-react';
import Link from 'next/link';
import styles from './searchBar.module.scss';
import { ALink, Input } from '@/components/_ui';
import W from './logo.png';

export const SearchBar = () => (
  <div className={styles.container}>
    <Link className={styles.search_content_catalog} href="/">
      <Image className={styles.logo} src={W} width={200} height={200} alt="logo" />
    </Link>
    <div className={styles.search}>
      <Input
        leftSection={
          <ALink label="" variant="secondary" leftSection={<IconCategory2 />} href="#" />
        }
        placeholder="find on MALLTIQUE"
      />
    </div>
    <div className={styles.navbar}>
      <ALink
        label=""
        variant="secondary"
        leftSection={<IconTruckDelivery size={30} stroke={1.5} />}
        href="#"
      />
      <ALink
        label=""
        variant="secondary"
        leftSection={<IconBasket size={30} stroke={1.5} />}
        href="#"
      />
      <ALink
        label=""
        variant="secondary"
        leftSection={<IconHeart size={30} stroke={1.5} />}
        href="#"
      />
      <ALink
        label=""
        variant="secondary"
        leftSection={<IconUserCircle size={30} stroke={1.5} />}
        href="/profile"
      />
    </div>
  </div>
);
