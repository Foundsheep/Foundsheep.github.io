import Link from "next/link";
import menuStyle from '../styles/menu.module.css';
import Image from "next/image";

export default function Menu() {
  return (
    <>
      <nav className={menuStyle.centeredContainer}>
        <div className={menuStyle.imageContainer}>
          <Link href={"/"}>
            <Image
              priority
              src='/images/profile_crop.jpg'
              className={menuStyle.menuImage}
              height={150}
              width={150}
              alt="profile"
            />
          </Link>
        </div>
        <div className={menuStyle.linkContainer}>
          <Link href={"/"} className={menuStyle.menuItem}>Home</Link>
          <Link href={"/cv"} className={menuStyle.menuItem}>CV</Link>
          <Link href={"/contact"} className={menuStyle.menuItem}>Contact</Link>
        </div>
      </nav>
    </>
  );
}