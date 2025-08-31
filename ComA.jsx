import styles from "./ComA.module.css";

function ComA() {
  return (
    <div className={`row g-2 ${styles.head}`}>
      <div className="col-12 col-md-5">
        <input 
          type="text" 
          placeholder="Enter Todo Item" 
          className={`form-control ${styles.place}`} 
        />
      </div>
      <div className="col-12 col-md-4">
        <input 
          type="date" 
          className={`form-control ${styles.date}`} 
        />
      </div>
      <div className="col-12 col-md-3">
        <button type="button" className={`btn btn-success  ${styles.button}`}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ComA;
