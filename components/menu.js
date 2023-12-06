import Link from "next/link";
import menuStyle from '../styles/menu.module.css';
import Image from "next/image";

export default function Menu() {
  return (
    <>
      <nav>
        <Image
          priority
          src='/images/profile_crop.jpg'
          className={menuStyle.menuImage}
          height={100}
          width={100}
          alt="profile"
        />
        <Link href={"/"} className={menuStyle.menuItem}>Home</Link>
        <Link href={"/cv"} className={menuStyle.menuItem}>CV</Link>
        <Link href={"/contact"} className={menuStyle.menuItem}>Contact</Link>
      </nav>
    </>
  );
}