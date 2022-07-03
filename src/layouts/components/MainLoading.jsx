import { PingLoader } from "../../components/Loader";

export default function MainLoading() {
  return (
    <div className="absolute-center">
      <div>
        <span className="mx-1.5">
          <PingLoader size="0.5rem" color="white" />
        </span>
        <span className="mx-1.5">
          <PingLoader size="0.5rem" color="white" />
        </span>
        <span className="mx-1.5">
          <PingLoader size="0.5rem" color="white" />
        </span>
      </div>
    </div>
  );
}
