import { useState } from "react";

export const XSS = () => {
  const [input, setInput] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">HTMLインジェクション(XSS)</div>
        <div className="d-flex flex-column gap-3">
          <textarea
            className="form-control"
            name="input"
            id="input"
            cols={4}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setDisplayValue(input);
            }}
          >
            表示する
          </button>
          <div>表示領域</div>
          <div
            className="border p-2"
            dangerouslySetInnerHTML={{ __html: displayValue }}
          />
        </div>
      </div>
    </div>
  );
};
