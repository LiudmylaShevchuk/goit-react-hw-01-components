import PropTypes from 'prop-types';
import {
  Container,
    Title,
  StatList,
    Label,
    StatItem,
    Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(item => (
          <StatItem key={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};