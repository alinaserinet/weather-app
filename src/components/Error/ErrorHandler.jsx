import SetCityError from "./SetCityError";

export default function ErrorHandler({error}) {
  if(error === 'set-city-error'){
    return <SetCityError />
  }
  return <></>
}
