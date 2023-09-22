import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task';
import './task-list.css';

class TaskList extends React.Component {
  render() {
    const { tasks, removeTask, currentFilter, toggleTaskCompletion } =
      this.props;

    const filteredTasks = tasks.filter((task) => {
      if (currentFilter === 'All') {
        return true;
      }
      if (currentFilter === 'Active') {
        return !task.completed;
      }
      if (currentFilter === 'Completed') {
        return task.completed;
      }
      return true;
    });

    return (
      <section className="main">
        <ul className="todo-list">
          {filteredTasks.map((task, index) => (
            <Task
              key={`${task.description}-${task.created}`}
              description={task.description}
              created={task.created}
              completed={task.completed}
              removeTask={() => removeTask(index)}
              toggleTaskCompletion={() => toggleTaskCompletion(index)}
              currentFilter={task.currentFilter}
            />
          ))}
        </ul>
      </section>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      created: PropTypes.instanceOf(Date),
      completed: PropTypes.bool,
    }),
  ).isRequired,
  currentFilter: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
};

export default TaskList;
