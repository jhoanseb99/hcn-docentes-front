import { CircularProgress } from "@material-ui/core";

function LoadingScreen() {
  return (
    <div className="container vh-100">
      <div className="row h-100 text-center">
        <div className="col align-self-center">
          <CircularProgress className="ml-2" size={50} color="primary" />
        </div>
      </div>
    </div>
  );
}
export default LoadingScreen;
