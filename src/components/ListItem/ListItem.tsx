import Link from "next/link";
// style
import styles from "./ListItem.module.css";
// type
import { ProductListType } from "types/Interface";

function ListItem({ item }: { item: ProductListType }) {
  return (
    <Link href={`/item/${item.id}`}>
      <a>
        <div className={styles.wrapper} key={item.id}>
          <img className={styles.image} src={item.image_link} alt={item.name} />
          <h1 className={styles.name}>{item.name}</h1>
          <h3>$ {item.price}</h3>
          <span>★{item.rating}</span>
        </div>
      </a>
    </Link>
  );
}

export default ListItem;
