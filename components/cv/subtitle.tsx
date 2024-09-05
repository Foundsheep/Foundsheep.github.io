type SubtitleProps = {
  subtitle: string;
}

export function Subtitle(props: SubtitleProps) {
  const subtitle = props.subtitle;
  return <>
    <h2 className="subtitle">{subtitle}</h2>
    <hr></hr>
  </>
}