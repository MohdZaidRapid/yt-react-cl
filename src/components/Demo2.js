import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  console.log("rendering");
  const ref = useRef(0);
  //   red={ current:0}
  //   console.log(ref);
  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("React js", Math.random());
    }, 1000);

    return () => clearInterval(i.current);
  }, []);
  return (
    <div className="m-4 p-2 bg-slate-50 bfrder border-black w-96 h-96">
      <div>
        <button
          className="bg-green-100 px-2 m-4 "
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 px-2 m-4 "
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase y
        </button>
        <span className="font-bold text-xl">state = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 px-2 m-4 "
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref = ", ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
      <button
        className="bg-red-900 p-2 m-4 text-white font-bold rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
