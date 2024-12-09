export default function Sticker(category: string) {
  return(
    <span className="bg-slate-400 px-1 rounded-md text-slate-100 text-base">{category}</span>
  )
}

export function CompanySticker(name: string) {
  return (
    <span className="italic text-slate-300"> : {name}</span>
  )
}
