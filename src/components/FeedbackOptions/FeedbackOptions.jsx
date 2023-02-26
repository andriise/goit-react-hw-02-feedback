import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ items, onLeaveFeedback }) => {
  return (
    <List>
      {items.map(option => (
        <li key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  items: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
