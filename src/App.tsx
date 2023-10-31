import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <!-- Header --> */}
      <header>
        <p className="sub-title">遊びや催し事の予定を画像にしてみんなで共有しやすくしよう！</p>
        <h1 className="main-title">イベント予定告知画像メーカー</h1>
      </header>

      {/* <!-- Input forms --> */}
      <section className="form-section">
        <form className="forms">
          {/* <!-- Event name --> */}
          <label htmlFor="title">イベント名<span className="require">*</span></label>
          <input type="text" id="title" name="event" placeholder="イベント名" />
          {/* <!-- Place name --> */}
          <label htmlFor="place">場所<span className="require">*</span></label>
          <input type="text" id="place" placeholder="場所" />
          {/* <!-- Date --> */}
          <label htmlFor="date">日<span className="require">*</span></label>
          <input type="date" id="date" />
          {/* <!-- Time --> */}
          <label htmlFor="time">時間<span className="require">*</span></label>
          <input type="time" id="time" />
          {/* <!-- Content --> */}
          <label htmlFor="content">備考</label>
          <textarea className="" id="content"></textarea>
          {/* <!-- Background color --> */}
          <label htmlFor="">背景色</label><input type="color" id="background-color" value="#ffffff" />
          {/* <!-- Heading color --> */}
          <label htmlFor="">見出しの色</label><input type="color" name="" id="heading-color" value="#2cb1c0" />
          {/* <!-- Font color --> */}
          <label htmlFor="font-color">文字色</label><input type="color" id="font-color" />
        </form>
        <p><span className="require">*</span>は必須項目です。</p>
        {/* <!-- Create preview button --> */}
        <button id="create-preview" className="">プレビューを見る</button>
      </section>

      {/* <!-- Preview section--> */}
      <section id="capture" className="preview-section non-display">
        <table>
          <caption><span id="origin-title"></span></caption>
          <tr>
            <th className="heading">場所</th>
            <td>
              <span id="origin-place"></span>
            </td>
          </tr>
          <tr>
            <th className="heading">日にち</th>
            <td>
              <span id="origin-date"></span>
            </td>
          </tr>
          <tr>
            <th className="heading">時間</th>
            <td>
              <span id="origin-time"></span>
            </td>
          </tr>
          <tr>
            <th className="heading">備考</th>
            <td>
              <span id="origin-content"></span>
            </td>
          </tr>
        </table>
      </section>

      {/* <!-- Create image section --> */}
      <section id="create-image-button-section" className="non-display">
        <button id="make-image">画像にする</button>
      </section>

      {/* <!-- Image section --> */}
      <section id="make-image-section" className="non-display">
        <div id="image-space">
          <img src="" id="created-image" />
        </div>    
      </section>

      {/* <!-- Image download button section --> */}
      <section id="image-download-button-section"  className="non-display">
        <a href="" id="image-download" download="screenshot">画像ダウンロード</a>
      </section>

      
      <footer>
        ©イベント予定告知画像メーカー
      </footer>
    </div>
  );
}

export default App;
