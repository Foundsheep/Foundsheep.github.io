
function getLastUpdated() {
  const date = new Date();
  const isoDateTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();
  const lastUpdated = isoDateTime.slice(0, 10);

  return (
    <span className="bg-slate-200 px-1 rounded-md text-slate-500 text-base">{lastUpdated}</span>
  )
}

export default function ContactMe() {
  return (
    <div className="text-center mt-20">
      <h4>Contact me</h4>
      <p>deokjongmoon at gmail dot com<br></br>
        or<br></br>
        moondeokojong at gmail dot com
      </p>
      <p className="italic text-base">last updated on {getLastUpdated()}</p>
    </div>
  )
}