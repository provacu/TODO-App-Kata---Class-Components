import React from 'react';
import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import TaskFilter from '../task-filter';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          description: 'Задача 1',
          created: new Date(),
          completed: false,
        },
        {
          description: 'Задача 2',
          created: new Date(),
          completed: true,
        },
        {
          description: 'Задача 3',
          created: new Date(),
          completed: false,
        },
      ],
      currentFilter: 'All',
      itemsLeftCounter: 0,
    };
  }

  componentDidMount() {
    const { tasks } = this.state;
    this.setItemsLeftCounter(tasks);
  }

  // eslint-disable-next-line class-methods-use-this
  setItemsLeftCounter(tasks) {
    const activeTasks = tasks.filter((task) => !task.completed);
    return activeTasks.length;
  }

  removeTask = (index) => {
    this.setState(({ tasks }) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      return {
        tasks: updatedTasks,
        itemsLeftCounter: this.setItemsLeftCounter(updatedTasks),
      };
    });
  };

  addTask = (task) => {
    this.setState(({ tasks }) => {
      const newTasks = [...tasks, { ...task }];
      return {
        tasks: newTasks,
        itemsLeftCounter: this.setItemsLeftCounter(newTasks),
      };
    });
  };

  setFilter = (newFilter) => {
    this.setState({ currentFilter: newFilter });
  };

  toggleTaskCompletion = (index) => {
    this.setState(({ tasks }) => {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      return {
        tasks: newTasks,
        itemsLeftCounter: this.setItemsLeftCounter(newTasks),
      };
    });
  };

  clearCompletedTasks = () => {
    this.setState(({ tasks }) => {
      const activeTasks = tasks.filter((task) => !task.completed);
      return {
        tasks: activeTasks,
        itemsLeftCounter: this.setItemsLeftCounter(activeTasks),
      };
    });
  };

  render() {
    const { tasks, currentFilter, itemsLeftCounter } = this.state;

    return (
      <div className="todoapp">
        <h1>todos</h1>
        <NewTaskForm addTask={this.addTask} />
        <TaskList
          key={currentFilter}
          tasks={tasks}
          removeTask={this.removeTask}
          toggleTaskCompletion={this.toggleTaskCompletion}
          currentFilter={currentFilter}
        />
        <Footer
          clearCompletedTasks={this.clearCompletedTasks}
          itemsLeftCounter={itemsLeftCounter}
        >
          <TaskFilter setFilter={this.setFilter} />
        </Footer>
      </div>
    );
  }
}

export default App;
