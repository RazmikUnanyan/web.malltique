import React, { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { IALinkProps } from './aLink.props';
import styles from './aLink.module.scss';

export const ALink: FC<IALinkProps> = ({ leftSection, href, label, variant, className }) => (
    <Link
      href={href}
      className={cn(styles.linkContainer, className, {
        [styles.secondary]: variant === 'secondary',
        [styles.primary]: variant === 'primary',
    })}>
        {leftSection}
        {label}
    </Link>
);
