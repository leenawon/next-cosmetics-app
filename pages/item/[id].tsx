import { useEffect, useState } from "react";
import Link from "next/link";
// style
import styles from "./ItemDetail.module.css";
// dynamic route
import { useRouter } from "next/router";
// type
import { ProductListType } from "types/Interface";
// detail data fetch
import { fetchItem } from "utils/fetcher";

function ItemDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [itemDetail, setItemDetail] = useState<ProductListType>();

  useEffect(() => {
    if (id !== undefined) {
      fetchItem(id).then((res) => setItemDetail(res));
    }
  }, [id]);

  return (
    <>
      {itemDetail !== undefined && (
        <div className={styles.container}>
          <img
            className={styles.image}
            src={itemDetail.image_link}
            alt={itemDetail.name}
          />
          <div className={styles.content}>
            <h1 className={styles.name}>{itemDetail.name}</h1>
            <h3 className={styles.price}> $ {itemDetail.price}</h3>
            <span>★{itemDetail.rating}</span>
          </div>
          <Link href={itemDetail.website_link}>
            <a>
              <button className={styles.button}>구매하러 가기</button>
            </a>
          </Link>
          <div className={styles.content}>
            {itemDetail.product_colors.map((item, index) => (
              <div key={index}>
                <span>{item.hex_value} / </span>
                <span>{item.colour_name}</span>
              </div>
            ))}
            <p className={styles.description}>{itemDetail.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
