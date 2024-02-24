export default function MainBG({ bg: backgroundImage }) {
  return (
    <div
      className="main-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  )
}
