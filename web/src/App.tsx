import { CSRF } from "./cards/CSRF";
import { OpenRedirect } from "./cards/OpenRedirect";
import { XSS } from "./cards/XSS";

function App() {
  return (
    <>
      <div className="container my-3 d-flex flex-column gap-3">
        <h1>正規サイト</h1>
        <XSS />
        <OpenRedirect />
        <CSRF />
      </div>
    </>
  );
}

export default App;
