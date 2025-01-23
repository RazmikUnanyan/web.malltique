'use client';

import React, { FC } from 'react';
import {
    IconBrandGooglePlay,
    IconBrandAppstore,
} from '@tabler/icons-react';
import styles from './header.module.scss';
import { ALink } from '@/components';
import { CATALOGS } from '@/constants';
import { useSticky } from '@/hooks';
import { IHeaderProps } from './header.props';
import { HeaderLinks } from './HeaderLinks/HeaderLinks';
import { SearchBar } from './SearchBar/SearchBar';

export const Header: FC<IHeaderProps> = ({ ...props }) => {
  const { isSticky } = useSticky(100);

  return (
      <div className={styles.container} {...props}>
          <div className={styles.mobileLink}>
              <ALink
                variant="secondary"
                label="Appstore"
                leftSection={<IconBrandAppstore />}
                href="#"
              />
              <ALink
                variant="secondary"
                label="GooglePlay"
                leftSection={<IconBrandGooglePlay />}
                href="#"
              />
          </div>
          {!isSticky && (
              <div className={styles.links}>
                  <HeaderLinks />
              </div>
          )}
          <div className={styles.searchBar}>
              <SearchBar />
          </div>
          {!isSticky && (
              <div className={styles.catalog}>
                  {CATALOGS.map((category, index) => (
                      <ALink
                        key={index}
                        variant="secondary"
                        label={category.label}
                        leftSection={category.icon}
                        href={category.href}
                      />
                  ))}
              </div>
          )}
      </div>
  );
};
