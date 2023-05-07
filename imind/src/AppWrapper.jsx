import React, { createContext, useState } from "react";
// import ChildComponent1 from "./ChildComponent1";
// import ChildComponent2 from "./ChildComponent2";
import App from "./App";

// Create a new context for the API response
export const ApiResponseContext = createContext([]);

function AppWrapper() {
  const [apiResponse, setApiResponse] = useState([]);

  return (
    <ApiResponseContext.Provider value={[apiResponse, setApiResponse]}>
      <App />
    </ApiResponseContext.Provider>
  );
}

export default AppWrapper;
