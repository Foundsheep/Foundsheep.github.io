type SubtitleProps = {
  subtitle: string;
}

export function Subtitle(props: SubtitleProps) {
  const subtitle = props.subtitle;
  return (
    <div className="mb-6">
      <h2 className="subtitle pb-2 text-center">{subtitle}</h2>
      <hr></hr>
    </div>
  )
}