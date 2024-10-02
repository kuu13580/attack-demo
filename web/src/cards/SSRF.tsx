import axios from "axios";
import { useState } from "react";

export const SSRF = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const fetchPage = () => {
    axios
      .get("http://localhost:3000/ssrf", { params: { url: url } })
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          SSRF(サーバーサイドリクエストフォージェリ)
        </div>
        <div className="d-flex flex-column gap-3">
          <div>情報を取得したいサイトのURL</div>
          <input
            type="text"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="button" className="btn btn-primary" onClick={fetchPage}>
            取得
          </button>
          <div className="mt-3">取得結果</div>
          <div className="border p-3">{result}</div>
        </div>
      </div>
    </div>
  );
};
