import React from "react";
// import "./styles.css";

export const Loader = () => {
 return <button className="bg-slate-500 rounded-lg mt-2 p-3 w-36">
  Processing...
</button>
}

export const DottedLoader = () => {
    return (
      <>
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
}
