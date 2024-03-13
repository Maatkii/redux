import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
// import TaskItem from "./components/Taskitem/TaskItem";
// import EditTask from "./components/EditTask/EditTask";
// import { TaskReducer } from "./components/Reducers/TaskReducer";
// import addTask from "./components/AddTask/AddTask";
// import { Store } from "redux";
// import { done_task } from "./components/Actions/action";
// import { delete_task } from "./components/Actions/action";
// import { update_task } from "./components/Actions/action";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
