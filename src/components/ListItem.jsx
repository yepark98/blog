import React from "react";
import styles from "./ListItem.module.css";

const ListItem = () => {
  return (
    <>
      <li className={styles.listItem}>
        <h3 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          reiciendis animi, magni tempore ipsam labore nemo corporis distinctio
          illum excepturi debitis, id hic autem laborum deserunt dolorem vitae
          accusamus possimus!
        </h3>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          reiciendis animi, magni tempore ipsam labore nemo corporis distinctio
          illum excepturi debitis, id hic autem laborum deserunt dolorem vitae
          accusamus possimus!
        </p>
      </li>
      <li className={styles.listItem}>
        <h3 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          reiciendis animi, magni tempore ipsam labore nemo corporis distinctio
          illum excepturi debitis, id hic autem laborum deserunt dolorem vitae
          accusamus possimus!
        </h3>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          reiciendis animi, magni tempore ipsam labore nemo corporis distinctio
          illum excepturi debitis, id hic autem laborum deserunt dolorem vitae
          accusamus possimus!
        </p>
      </li>
    </>
  );
};

export default ListItem;
