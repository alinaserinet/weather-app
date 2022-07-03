import Container from "../Container";

export default function Header({children}) {
  return (
    <div className="text-center py-3 bg-slate-900 bg-opacity-40 text-white mx-0 w-full sticky top-0">
      <Container>{children}</Container>
    </div>
  )
}