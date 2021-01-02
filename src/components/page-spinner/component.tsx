import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

export interface IPageSpinner {
  isFetching: boolean;
}

const cx = classnames.bind(styles);

export const PageSpinner = ({isFetching}: IPageSpinner) => (
  <div
    className={cx('wrap', {
      fadeOut: !isFetching,
    })}
    data-testid="loader"
  >
    <div className={styles.loader} />
  </div>
);
