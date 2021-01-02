import React, {useEffect} from 'react';
import {TNotification} from '../../redux/reducers/app';

interface IProps {
  isOpened: boolean;
  onClose: () => void;
  toggleNotification: (props: TNotification) => void;
  children?: JSX.Element;
  message?: string;
  type?: string;
}

export const Notification = ({message, children, onClose, toggleNotification}: IProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleNotification({isOpened: false});
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <div data-testid="notification">
      <div>
        <span>{message}. </span>
        {children}
      </div>
      <button
        onClick={onClose}
        aria-label="close-notification"
        type="button"
        data-testid="close-notification"
      />
    </div>
  );
};
