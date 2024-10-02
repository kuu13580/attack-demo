import { useEffect, useState } from "react";
import { getCookies } from "../functions";
import axios from "axios";

export const CSRF = () => {
  const [cookies, setCookies] = useState<{ name: string; value: string }[]>([]);

  const reload = () => {
    setCookies(getCookies());
  };

  useEffect(() => {
    reload();
  }, []);

  const attack = () => {
    axios
      .post("http://localhost:3000/authorize", null, { withCredentials: true })
      .then(() => {
        window.alert("リクエストに成功しました");
        reload();
      })
      .catch(() => {
        window.alert("リクエストに失敗しました");
      });
  };

  const doubleSubmitCookie = () => {
    axios
      .post("http://localhost:3000/double-submit-cookie", null, {
        withCredentials: true,
      })
      .then(() => {
        window.alert("リクエストに成功しました");
        reload();
      })
      .catch(() => {
        window.alert("リクエストに失敗しました");
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          CSRF(クロスサイトリクエストフォージェリ)
        </div>
        <div className="d-flex flex-column gap-3">
          <button type="button" className="btn btn-primary" onClick={attack}>
            APIへの偽装リクエスト
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={doubleSubmitCookie}
          >
            DoubleSubmitCookieリクエスト（ヘッダなし）
          </button>
          <div className="border">
            <div className="d-inline me-3">Cookieの一覧</div>
            <button type="button" className="btn btn-primary" onClick={reload}>
              再読み込み
            </button>
            {cookies.map((cookie) => (
              <div key={cookie.name}>
                {cookie.name}: {cookie.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
