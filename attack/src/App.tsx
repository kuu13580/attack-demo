import { ClickJacking } from "./cards/ClickJacking";

function App() {
  return (
    <>
      <div className="container my-3 d-flex flex-column gap-3">
        <h1>偽サイト</h1>
        <ClickJacking />
      </div>
    </>
  );
}

export default App;
