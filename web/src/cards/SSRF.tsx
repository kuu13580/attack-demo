import axios from "axios";
import { useState } from "react";

export const SSRF = () => {
  const [url, setUrl] = useState("");

  const fetchPage = () => {
    axios
      .get("http://localhost:3000/ssrf", { params: { url: url } })
      .then((res) => {
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
        </div>
      </div>
    </div>
  );
};
