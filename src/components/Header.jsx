import Container from "./Container";

export default function Header({cityName}) {
  return (
    <Container className="text-center py-3 bg-slate-900 bg-opacity-40 text-white">
      {cityName}
    </Container>
  )
}