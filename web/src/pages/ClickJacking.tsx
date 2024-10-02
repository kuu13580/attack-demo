export const ClickJacking = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <div style={{ fontSize: 28 }}>クリックジャッキング</div>
      <div>このページはクリックジャッキングを検知するためのページです。</div>
      <div>以下のボタンをクリックしてください。</div>
      <button
        className="btn btn-primary"
        onClick={() => alert("正規サイトのボタンがクリックされました！")}
      >
        クリック
      </button>
    </div>
  );
};
