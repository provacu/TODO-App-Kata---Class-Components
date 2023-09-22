import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import TaskFilter from '../task-filter';
import React from 'react';

import './app.css';

// Классовый компонент User
class App extends React.Component {
  constructor(props) {
    super(props);

    this.now = new Date();
    this.formattedDate = `${this.now.getFullYear()}-${String(
      this.now.getMonth() + 1,
    ).padStart(2, '0')}-${String(this.now.getDate()).padStart(2, '0')} ${String(
      this.now.getHours(),
    ).padStart(2, '0')}:${String(this.now.getMinutes()).padStart(
      2,
      '0',
    )}:${String(this.now.getSeconds()).padStart(2, '0')}`;

    // Начальные значения внутреннего состояния
    this.state = {
      tasks: [
        {
          description: 'Задача 1',
          created: this.formattedDate,
          completed: false,
        },
        {
          description: 'Задача 2',
          created: this.formattedDate,
          completed: true,
        },
      ],
    };
  }

  /*
   * Обработчики событий: изменяют внутреннее состояние
   */
  // handleLike = () => {
  //   this.setState({ rating: 1 });
  // };

  // handleDislike = () => {
  //   this.setState({ rating: -1 });
  // };

  // JSX-структура компонента
  render() {
    return (
      <div className="todoapp">
        <h1>todo</h1>
        <NewTaskForm />
        <TaskList tasks={this.state.tasks} />
        <Footer>
          <TaskFilter />
        </Footer>
      </div>
    );
  }
}

// Основной код приложения
//   ReactDOM.render((
//     <>
//       <h2>Мои воображаемые друзья:</h2>
//       <User id="1" name="Gregory" />
//       <User id="2" name="James" />
//       <User id="3" name="Allison" />
//     </>
//   ), document.querySelector('#root'));

export default App;
