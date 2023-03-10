import Link from "next/link";
import styles from "@/styles/BlogCard.module.css";
export default function BlogCard({ id, title, author, slug, coverPhoto }) {
  return (
    <>
      <div className={styles.card}>
        <Link href={"/posts/" + slug}>
          <div className={styles.imgContainer}>
            <img src={coverPhoto.url} alt="image" />
          </div>
        </Link>
      </div>
      <div className={styles.text}>
       <h2 className="">
        {title}
       </h2>
       <div className={styles.details}>
            <div className={styles.author}>
                <img src={author.avatar.url} />
                <h3>{author.name}</h3>
            </div>
       </div>
      </div>
    </>
  );
}
