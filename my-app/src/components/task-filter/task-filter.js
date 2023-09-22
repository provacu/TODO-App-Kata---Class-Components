import React from 'react';
import PropTypes from 'prop-types';
import './task-filter.css';

class TaskFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: 'All',
    };
  }

  handleClick = (filter) => {
    this.setState({
      isSelected: filter,
    });
  };

  render() {
    const { isSelected } = this.state;
    const { setFilter } = this.props;

    return (
      <ul className="filters">
        <li>
          <button
            type="button"
            className={isSelected === 'All' ? 'selected' : ''}
            onClick={() => {
              this.handleClick('All');
              setFilter('All');
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={isSelected === 'Active' ? 'selected' : ''}
            onClick={() => {
              this.handleClick('Active');
              setFilter('Active');
            }}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={isSelected === 'Completed' ? 'selected' : ''}
            onClick={() => {
              this.handleClick('Completed');
              setFilter('Completed');
            }}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

TaskFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default TaskFilter;
