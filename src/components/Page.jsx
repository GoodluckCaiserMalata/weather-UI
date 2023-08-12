import React from "react";
import Searchbar from "./Searchbar";
import Datetoday from "./Date";

function Page(params) {
  return (
    <>
      <div>
        <Datetoday />
        <Searchbar />
      </div>
    </>
  );
}

export default Page;
