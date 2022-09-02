// style
import "../styles/globals.css";
import "../styles/variables.css";
// components
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// 레이아웃을 만들기 위해서는 이 파일을 이용한다.
// 페이지 전환 시 상태 값을 유지할 수 있다.
// 모든 페이지는 이곳을 통한다.
// componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
// 추가적인 데이터를 페이지로 주입시켜주는 것이 가능하다.
// 글로벌 css를 이 파일에 선언해준다.

// Component는 현재 페이지를 의미함. 페이지 전환 시 Component props가 변경됌.
// pageProps는 데이터 fetching 메소드를 통해 미리 가져온 초기 객체.. 이 메서드를 사용하지 않는다면 빈 객체가 전달됌.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
