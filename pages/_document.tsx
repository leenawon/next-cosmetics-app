import Document, { Html, Head, Main, NextScript } from "next/document";

// 서버에서만 렌더링 되고 onClick 같은 이벤트는 작동하지 않음.
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
