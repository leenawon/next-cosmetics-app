// style
import styles from "./ProductList.module.css";
// type
import { ProductListType } from "types/Interface";
// components
import ListItem from "../ListItem/ListItem";

function ProductList({ list }: { list: ProductListType[] }) {
  return (
    <div className={styles.container}>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductList;
