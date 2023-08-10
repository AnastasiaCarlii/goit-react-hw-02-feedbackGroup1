import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, feedback }) => {
  if (total) {
    return (
      <section>
        <p>good:{good}</p>
        <p>neutral:{neutral}</p>
        <p>bad:{bad}</p>
        <p>total:{total}</p>
        <p>Positive feedback:{feedback}%</p>
      </section>
    );
  } else {
    return <Notification message="No feedback given" />;
  }
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default Statistics;
