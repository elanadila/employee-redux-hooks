import { AddEmployee, ListEmployee } from "./components";

function App() {
  return (
    <div style={{ padding:'30px' }}>
      <h2>Employee</h2>
      <hr />
      <AddEmployee />
      <hr />
      <ListEmployee />
    </div>
  );
}

export default App;
