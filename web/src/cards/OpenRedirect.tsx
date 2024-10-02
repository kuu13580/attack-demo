import { useState } from "react";

export const OpenRedirect = () => {
  const [url, setUrl] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">オープンリダイレクト</div>
        <div className="d-flex flex-column gap-3">
          <div>遷移先</div>
          <input
            type="text"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <a href={`/redirect?to=${url}`}>{url && `/redirect?to=${url}`}</a>
        </div>
      </div>
    </div>
  );
};
