//import { useRouteError } from "react-router-dom";

const Error = () => {
  //const errorRoute = useRouteError();
  //console.log("errorRoute",errorRoute);
  return (
    <div style={{ color: "red" }}>
      <h1>Oops! something went wrong!</h1>
     {/* <h2>{errorRoute?.data}</h2> */}
    </div>
  );
};

export default Error;