import React from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  submitTask = (evt) => {
    const { value } = this.state;
    const { addTask } = this.props;

    if (evt.key === 'Enter' && value !== '') {
      addTask({
        description: value,
        created: new Date(),
        completed: false,
      });
      this.setState({ value: '' });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <header className="header">
        <input
          value={value}
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyPress={this.submitTask}
          onChange={(evt) => {
            this.setState({
              value: evt.target.value,
            });
          }}
        />
      </header>
    );
  }
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
