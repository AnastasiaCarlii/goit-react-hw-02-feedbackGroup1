import PropTypes from 'prop-types';
import { Report } from 'components/Notification/Notification.styled';

export const Notification = ({ message }) => {
  return (
    <Report>
      <p>{message}</p>
    </Report>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
