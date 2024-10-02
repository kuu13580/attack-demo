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

  const startSession = () => {
    axios
      .get("http://localhost:3000/token", { withCredentials: true })
      .then((res) => {
        console.log(res);
        reload();
      });
  };

  const authorize = () => {
    axios
      .post("http://localhost:3000/authorize", { withCredentials: true })
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
      .post("http://localhost:3000/double-submit-cookie", {
        withCredentials: true,
        headers: {
          "X-Xsrftoken": cookies.filter((e) => e.name == "token")[0].value,
        },
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
          <button
            type="button"
            className="btn btn-primary"
            onClick={startSession}
          >
            セッションの開始
          </button>
          <button type="button" className="btn btn-primary" onClick={authorize}>
            APIへのリクエスト
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={doubleSubmitCookie}
          >
            DoubleSubmitCookieリクエスト
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
