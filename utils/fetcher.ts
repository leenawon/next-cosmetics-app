import axios from "axios";

// 제품 전체 리스트 데이터 fetch
export function fetchList() {
  const data = axios
    .get(`${process.env.NEXT_PUBLIC_LIST_API_URL}`)
    .then((res) => {
      return res.data;
    });
  return data;
}
