export default function Menu() {
    const menus = ["Home", "Portfolio", "Thoughts"]
    return (
        menus.map(e => (
            {
                <a href=e>e</a>
            }
        ))

    )
}