import Link from "next/link";

const navItems = {
  "/": {
    name: 'home',
  },
  "/cv": {
    name: "cv",
  },
  "/about": {
    name: "about"
  }
}

export function NavBar() {
  return (
    <nav className="min-h-20 tracking-tight">
      <div>
        {Object.entries(navItems).map(([path, {name}]) => {
          return (
            <Link className="mr-4 font-extrabold text-4xl sm:mr-8 md:mr-14"
              key={path}
              href={path}
            >
              {name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}