import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../../App.css";
import Loader from "react-loader-spinner";
export const MyLoader = () => {
  return (
    <Loader type="Rings" color="#00BFFF" height={80} width={80} className="ring-loader"/>
  );
};