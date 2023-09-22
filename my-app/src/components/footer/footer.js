import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

function Footer({ itemsLeftCounter, children, clearCompletedTasks }) {
  return (
    <footer className="footer">
      <span className="todo-count">{`${itemsLeftCounter} items left`}</span>
      {children}
      <button
        type="button"
        className="clear-completed"
        onClick={clearCompletedTasks}
      >
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  itemsLeftCounter: PropTypes.number,
  children: PropTypes.node.isRequired,
  clearCompletedTasks: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  itemsLeftCounter: 0,
};

export default Footer;
