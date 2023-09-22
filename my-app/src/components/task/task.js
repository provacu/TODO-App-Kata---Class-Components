/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);

    const { description, created } = props;

    this.state = {
      description,
      isEditing: false,
      tempDescription: '',
      transformedDate: formatDistanceToNow(created, { addSuffix: true }),
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { created } = this.props;

      this.setState(() => ({
        transformedDate: formatDistanceToNow(created, { addSuffix: true }),
      }));
    }, 60000);
  }

  handleEdit = () => {
    this.setState((prevState) => ({
      isEditing: true,
      tempDescription: prevState.description,
    }));
  };

  handleTempDescriptionChange = (event) => {
    const { value } = event.target;

    this.setState({ tempDescription: value });
  };

  handleFinishEdit = () => {
    this.setState((prevState) => ({
      isEditing: false,
      description: prevState.tempDescription,
    }));
  };

  handleFinishEditOnEnter = (evt) => {
    const { tempDescription } = this.state;

    if (evt.key === 'Enter' && tempDescription !== '') {
      this.handleFinishEdit();
    }
  };

  render() {
    const { description, transformedDate, tempDescription, isEditing } =
      this.state;
    const { completed, removeTask, toggleTaskCompletion, id } = this.props;

    return (
      <li
        className={`${completed ? 'completed' : ''} ${
          isEditing ? 'editing' : ''
        }`}
      >
        {isEditing ? (
          <input
            id={`task-input-${id}`}
            type="text"
            className="edit"
            value={tempDescription}
            onChange={this.handleTempDescriptionChange}
            onBlur={this.handleFinishEdit}
            onKeyPress={this.handleFinishEditOnEnter}
          />
        ) : (
          <div className="view">
            <input
              id={`task-checkbox-${id}`}
              className="toggle"
              type="checkbox"
              checked={completed}
              onChange={toggleTaskCompletion}
            />
            <label aria-label="Task Information">
              <span className="description">{description}</span>
              <span className="created">{transformedDate}</span>
            </label>
            <button
              type="button"
              aria-label="Edit task"
              className="icon icon-edit"
              onClick={this.handleEdit}
            />
            <button
              type="button"
              aria-label="Delete task"
              className="icon icon-destroy"
              onClick={removeTask}
            />
          </div>
        )}
      </li>
    );
  }
}

Task.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  created: PropTypes.instanceOf(Date).isRequired,
  completed: PropTypes.bool.isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
};

Task.defaultProps = {
  id: null,
  description: 'Random Task',
};

export default Task;
