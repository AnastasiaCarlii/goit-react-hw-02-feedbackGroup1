import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>good:{good}</StatisticsItem>
      <StatisticsItem>neutral:{neutral}</StatisticsItem>
      <StatisticsItem>bad:{bad}</StatisticsItem>
      <StatisticsItem>total:{total}</StatisticsItem>
      <StatisticsItem>Positive feedback:{positivePercentage}%</StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
