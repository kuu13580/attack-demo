import { useState } from "react";

export const ClickJacking = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">クリックジャッキング</div>
        <div className="d-flex flex-column gap-3">
          <button
            className="btn btn-primary"
            onClick={() => setVisible(!visible)}
          >
            表示の切り替え
          </button>
          <div>状態：{visible ? "visible" : "invisible"}</div>
          <div className="position-relative">
            <div className="position-absolute w-100 h-100">
              <div className="d-flex flex-row justify-content-center">
                <button
                  className="position-absolute"
                  style={{
                    top: 135,
                    opacity: visible ? 0.5 : 0,
                    width: "100%",
                    height: 45,
                  }}
                  onClick={() => window.alert("クリックジャッキングの罠だ！")}
                >
                  罠ボタン
                </button>
              </div>
            </div>
            <iframe
              className="border"
              src="http://localhost:4000/click-jacking"
              style={{
                width: "100%",
                height: 200,
                border: "none",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
