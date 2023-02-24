import { Component } from 'react';
import { FeedbackField } from 'components/Feedback/FeedbackField/FeedbackField';
import { FeedbackStatistics } from './FeedbackStatistics/FeedbackStatistics';
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addStats = () => {
    this.setState(prevState => console.log(prevState));
  };
  render() {
    return (
      <div>
        <FeedbackField onAddStats={this.addStats} />
        <FeedbackStatistics />
      </div>
    );
  }
}
