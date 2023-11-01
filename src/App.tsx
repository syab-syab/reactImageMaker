import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import html2canvas from "html2canvas";

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
  const [content, setContent] = useState<string>("特になし")

  // Background color
  const [background, setBackground] = useState<string>("#ffffff")

  // Heading color
  const [heading, setHeading] = useState<string>("#2cb1c0")

  // Font color
  const [color, setColor] = useState<string>("#000000")

  // capture state
  const [preview, setPreview] = useState<boolean>(false)

  // download state
  const [download, setDownload] = useState<boolean>(false)

  // --------- 関数 --------------
  // プレビュー作成
  const createImage = (): void => {
    if (title === '' || place === '' || date === '' || time === '' ) {
      alert("必須項目を入力してください。");
    } else {
      setPreview(true)
    }
  }

  const createScreenshot = (): void => {
    // オプションの指定
    const options = {
    // 画質を良くする
      scale: 3
    }
    const capture: any = document.getElementById("capture")
    // フォームに入力したら画像を表示
    html2canvas(capture, options).then(function(canvas) {
      //imgのsrcに、生成した画像urlを入れて表示。
      const imgData: string = canvas.toDataURL();
      const createImage: any = document.getElementById("created-image");
      console.log(imgData)
      createImage.src = imgData;
      // 表示される画像のサイズの調整
      createImage.width = capture.clientWidth;
      // aタグのhrefに生成した画像を入れてダウンロードできるようにする
      const imageDownload: any = document.getElementById("image-download");
      imageDownload.href = imgData;
    });
    setDownload(true)
  }

  return (
    <div className="App">
      <Header />

      {/* Input forms */}
      <section className="form-section">
        <form className="forms">
          {/* Event name */}
          <label htmlFor="title">イベント名<span className="require">*</span></label>
          <input type="text" id="title" name="event" placeholder="イベント名" onChange={(e) => setTitle(e.target.value)} />
          {/* Place name */}
          <label htmlFor="place">場所<span className="require">*</span></label>
          <input type="text" id="place" placeholder="場所" onChange={(e) => setPlace(e.target.value)} />
          {/* Date */}
          <label htmlFor="date">日<span className="require">*</span></label>
          <input type="date" id="date" onChange={(e) => setDate(e.target.value)} />
          {/*  Time  */}
          <label htmlFor="time">時間<span className="require">*</span></label>
          <input type="time" id="time" onChange={(e) => setTime(e.target.value)} />
          {/* Content */}
          <label htmlFor="content">備考</label>
          <textarea className="" id="content" onChange={(e) => setContent(e.target.value)}></textarea>
          {/* Background color */}
          <label htmlFor="background-color">背景色</label><input type="color" id="background-color" value={background} onChange={(e) => setBackground(e.target.value)} />
          {/* Heading color */}
          <label htmlFor="heading-color">見出しの色</label><input type="color" name="" id="heading-color" value={heading} onChange={(e) => setHeading(e.target.value)} />
          {/* Font color */}
          <label htmlFor="font-color">文字色</label><input type="color" id="font-color" value={color} onChange={(e) => setColor(e.target.value)} />
        </form>
        <p><span className="require">*</span>は必須項目です。</p>
        {/* Create preview button */}
        <button id="create-preview" className="" onClick={createImage}>プレビューを見る</button>
      </section>

      {/* Preview section */}
      {/* [ToDo]長文が折り返されない問題を解決する */}
      <section
        id="capture"
        className={preview ? "preview-section" : "preview-section non-display"}
        style={{color: color, backgroundColor: background}}
      >
        <table>
          <caption>
            <span id="origin-title">
            {title}
            </span>
          </caption>
          <tbody>
          <tr>
            <th
              className="heading"
              style={{backgroundColor: heading}}
            >
              場所
            </th>
            <td>
              <span id="origin-place">
                {place}
              </span>
            </td>
          </tr>
          <tr>
            <th
              className="heading"
              style={{backgroundColor: heading}}
            >
              日にち
            </th>
            <td>
              <span id="origin-date">
                {date}
              </span>
            </td>
          </tr>
          <tr>
            <th
              className="heading"
              style={{backgroundColor: heading}}
            >
              時間
            </th>
            <td>
              <span id="origin-time">
                {time}
              </span>
            </td>
          </tr>
          <tr>
            <th
              className="heading"
              style={{backgroundColor: heading}}
            >
              備考
            </th>
            <td>
              <span id="origin-content">
                {content}
              </span>
            </td>
          </tr>
          </tbody>
        </table>
      </section>

      {/* Create image section */}
      <section id="create-image-button-section" className={preview ? "" : "non-display"}>
        <button id="make-image" onClick={createScreenshot}>画像にする</button>
      </section>

      {/* Image section */}
      {/* previewは便宜上のものだから後ほど新しいstateを定義する */}
      <section id="make-image-section" className={download ? "" : "non-display"}>
        <div id="image-space">
          <img src="" id="created-image" alt='aaa' />
        </div>    
      </section>

      {/* Image download button section */}
      {/* previewは便宜上のものだから後ほど新しいstateを定義する */}
      <section id="image-download-button-section"  className={download ? "" : "non-display"}>
        <a href="" id="image-download" download="screenshot">画像ダウンロード</a>
      </section>

      <Footer />
    </div>
  );
}

export default App;
