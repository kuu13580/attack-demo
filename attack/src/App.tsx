import { ClickJacking } from "./cards/ClickJacking";
import { CSRF } from "./cards/CSRF";

function App() {
  return (
    <>
      <div className="container my-3 d-flex flex-column gap-3">
        <h1>偽サイト</h1>
        <ClickJacking />
        <CSRF />
      </div>
    </>
  );
}

export default App;
