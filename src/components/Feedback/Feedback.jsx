import PropTypes from 'prop-types';
import {
  FeedbackBtnList,
  FeedbackBtnItem,
} from 'components/Feedback/Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBtnList>
      {options.map(option => {
        return (
          <FeedbackBtnItem
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackBtnItem>
        );
      })}
    </FeedbackBtnList>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
