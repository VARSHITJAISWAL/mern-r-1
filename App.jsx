import ComA from "./ComA";
import ComB from "./ComB";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.head}>
      <h1 className={styles.title}>ToDo List</h1>
      <div className="container">
        <ComA />
        <ComB />
      </div>
    </div>
  );
}

export default App;
