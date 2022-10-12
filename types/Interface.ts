interface ProductColors {
  colour_name: string;
  hex_value: string;
}

// 제품 리스트 데이터 타입 정의
export interface ProductListType {
  api_featured_image: string;
  brand: string;
  category: string;
  created_at: string;
  currency: string | null;
  description: string;
  id: number;
  image_link: string;
  name: string;
  price: string;
  price_sign: string | null;
  product_api_url: string;
  product_colors: ProductColors[];
  product_link: string;
  product_type: string;
  rating: number;
  tag_list: string[];
  updated_at: string;
  website_link: string;
}
