import PropTypes from 'prop-types';
import { Report } from 'components/Notification/Notification.styled';

export const Notification = ({ message }) => {
  return <Report>{message}</Report>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
