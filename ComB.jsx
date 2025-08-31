import styles from "./ComB.module.css";

function ComB() {
  let task1 = "Buy Milk";
  let task2 = "Go to College";
  let taskDate = "10/05/25";

  return (
    <div className={styles.left}>
      <div className="row align-items-center mb-2">
        <div className="col-12 col-md-5">{task1}</div>
        <div className="col-6 col-md-4">{taskDate}</div>
        <div className="col-6 col-md-3">
          <button type="button" className={`btn btn-danger  ${styles.button}`}>Delete</button>
        </div>
      </div>

      <div className="row align-items-center mb-2">
        <div className="col-12 col-md-5">{task2}</div>
        <div className="col-6 col-md-4">{taskDate}</div>
        <div className="col-6 col-md-3">
          <button type="button" className={`btn btn-danger  ${styles.button}`}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ComB;
