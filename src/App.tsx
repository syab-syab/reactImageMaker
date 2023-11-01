import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // Event title
  const [title, setTitle] = useState<string>("")

  // Event place
  const [place, setPlace] = useState<string>("")

  // Event date
  const [date, setDate] = useState<string>("")

  // Event time
  const [time, setTime] = useState<string>("")

  // Event content
  const [content, setContent] = useState<string>("")

  // Background color
  const [background, setBackground] = useState<string>("#ffffff")

  // Heading color
  const [heading, setHeading] = useState<string>("#2cb1c0")

  // Font color
  const [color, setColor] = useState<string>("#000000")


  // --------- 関数 --------------

  return (
    <div className="App">
      <Header />

      {/* <!-- Input forms --> */}
      <section className="form-section">
        <form className="forms">
          {/* <!-- Event name --> */}
          <label htmlFor="title">イベント名<span className="require">*</span></label>
          <input type="text" id="title" name="event" placeholder="イベント名" onChange={(e) => setTitle(e.target.value)} />
          {title}<br/>
          {/* <!-- Place name --> */}
          <label htmlFor="place">場所<span className="require">*</span></label>
          <input type="text" id="place" placeholder="場所" onChange={(e) => setPlace(e.target.value)} />
          {place}<br/>
          {/* <!-- Date --> */}
          <label htmlFor="date">日<span className="require">*</span></label>
          <input type="date" id="date" onChange={(e) => setDate(e.target.value)} />
          {date}<br/>
          {/* <!-- Time --> */}
          <label htmlFor="time">時間<span className="require">*</span></label>
          <input type="time" id="time" onChange={(e) => setTime(e.target.value)} />
          {time}<br/>
          {/* <!-- Content --> */}
          <label htmlFor="content">備考</label>
          <textarea className="" id="content" onChange={(e) => setContent(e.target.value)}></textarea>
          {content}<br/>
          {/* <!-- Background color --> */}
          <label htmlFor="">背景色</label><input type="color" id="background-color" value={background} onChange={(e) => setBackground(e.target.value)} />
          {/* <!-- Heading color --> */}
          <label htmlFor="">見出しの色</label><input type="color" name="" id="heading-color" value={heading} onChange={(e) => setHeading(e.target.value)} />
          {/* <!-- Font color --> */}
          <label htmlFor="font-color">文字色</label><input type="color" id="font-color" value={color} onChange={(e) => setColor(e.target.value)} />
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

      
      <Footer />
    </div>
  );
}

export default App;
