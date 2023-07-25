import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center",marginTop: "200px"}}>
      <Loader type="Spinner Type" color="#3399FF" height={100} width={100} />
      Loading...
    </div>
  );
};

export { Spinner as Loader };
