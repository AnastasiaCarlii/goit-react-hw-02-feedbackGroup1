import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, handleIncrement }) => {
  return (
    <section>
      {options.map(option => (
        <button
          //   className={feedbackButton}
          key={option}
          name={option}
          type="button"
          onClick={handleIncrement}
        >
          {option}
        </button>
      ))}
    </section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
