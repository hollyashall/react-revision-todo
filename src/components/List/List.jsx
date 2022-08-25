import "./List.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const List = ({ tasks, handleDelete, toggleCheck }) => {
  console.log(tasks);
  return (
    <div className="list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <p className={task.isChecked ? "list__item--checked" : "list__item"}  key={Math.random()}>
            <input
              className="list__input"
              checked={task.isChecked}
              type="checkbox"
              onChange={(e) => toggleCheck(task, e.target.isChecked)}
            />
            {task.taskName}

            <button className="list__delete" onClick={() => handleDelete(task)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </p>
        ))
      ) : (
        <h2>No ToDos</h2>
      )}
    </div>
  );
};
export default List;
