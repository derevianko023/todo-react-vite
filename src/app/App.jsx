// providers
import { TodoProvider } from "@/app/providers/context/todo/TodoProvider";
//react
import { Routes, Route, NavLink } from "react-router-dom";
// pages
import { HomePage } from "@/pages/HomePage";
import { CompletedTasks } from "@/pages/CompletedTasks";
import { IncompletedTasks } from "@/pages/IncompletedTasks";
// widgets
import { Todo } from "@/widgets/Todo";
// styles
import styles from "./App.module.scss";

const App = () => {
  return (
    <TodoProvider>
      <div className={styles.app}>
        <nav className={styles.navigation}>
          <NavLink
            to="/"
            className={styles.item}
            activeClassName={styles.activeItem}
          >
            All my tasks
          </NavLink>
          <NavLink
            to="/completedTasks"
            className={styles.item}
            activeClassName={styles.activeItem}
          >
            My completed tasks
          </NavLink>
          <NavLink
            to="/incompletedTasks"
            className={styles.item}
            activeClassName={styles.activeItem}
          >
            My incompleted tasks
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/completedTasks" element={<CompletedTasks />} />
          <Route path="/incompletedTasks" element={<IncompletedTasks />} />
        </Routes>
      </div>
    </TodoProvider>
  );
};

export default App;
