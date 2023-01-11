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

// 제품 하나의 상세 데이터 fetch
export function fetchItem(id: string | string[]) {
  const data = axios
    .get(`${process.env.NEXT_PUBLIC_ITEM_API_URL}/${id}.json`)
    .then((res) => {
      return res.data;
    });
  return data;
}
