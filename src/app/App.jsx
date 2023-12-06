// providers
import { TodoProvider } from "@/app/providers/context/todo/TodoProvider";
//react
import { Routes, Route, NavLink } from "react-router-dom";
// pages
import { HomePage } from "@/pages/HomePage";
import { CompletedTasks } from "@/pages/CompletedTasks";
import { IncompletedTasks } from "@/pages/IncompletedTasks";

// styles
import styles from "./App.module.scss";

const App = () => {

  return (
    <TodoProvider>
      <div className={styles.app}>
        <nav className={styles.navigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [styles.item, isActive ? styles.activeItem : ""].join(" ")
            }
          >
            All my tasks
          </NavLink>
          <NavLink
            to="/completedTasks"
            className={({ isActive }) =>
              [styles.item, isActive ? styles.activeItem : ""].join(" ")
            }
          >
            My completed tasks
          </NavLink>
          <NavLink
            to="/incompletedTasks"
            className={({ isActive }) =>
              [styles.item, isActive ? styles.activeItem : ""].join(" ")
            }
          >
            My incompleted tasks
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/completedTasks" element={<CompletedTasks />} />
          <Route path="/incompletedTasks" element={<IncompletedTasks />} />
        </Routes>
      </div>
    </TodoProvider>
  );
};

export default App;
