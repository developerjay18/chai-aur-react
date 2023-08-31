import { useState } from 'react';

function App() {
  let [bgColor, setbgColor] = useState('#000000');

  let colorProp = {
    backgroundColor: bgColor,
  };
  return (
    <>
      <div
        className="main-container h-screen flex justify-end items-end"
        style={colorProp}
      >
        <div className="button-bar bg-slate-100 w-[90%] mx-auto rounded-xl p-3 mb-10 flex justify-between">
          <button
            onClick={() => {
              setbgColor('#ef4444');
            }}
            className="bg-red-500 px-4 py-1 rounded-xl text-white capitalize"
          >
            Red
          </button>
          <button
            onClick={() => {
              setbgColor('#22c55e');
            }}
            className="bg-green-500 px-4 py-1 rounded-xl text-white capitalize"
          >
            green
          </button>
          <button
            onClick={() => {
              setbgColor('#3b82f6');
            }}
            className="bg-blue-500 px-4 py-1 rounded-xl text-white capitalize"
          >
            blue
          </button>
          <button
            onClick={() => {
              setbgColor('#808000');
            }}
            className="bg-[#808000] px-4 py-1 rounded-xl text-white capitalize"
          >
            olive
          </button>
          <button
            onClick={() => {
              setbgColor('#64748b');
            }}
            className="bg-slate-500 px-4 py-1 rounded-xl text-white capitalize"
          >
            grey
          </button>
          <button
            onClick={() => {
              setbgColor('#eab308');
            }}
            className="bg-yellow-500 px-4 py-1 rounded-xl text-white capitalize"
          >
            yellow
          </button>
          <button
            onClick={() => {
              setbgColor('#ec4899');
            }}
            className="bg-pink-500 px-4 py-1 rounded-xl text-white capitalize"
          >
            pink
          </button>
          <button
            onClick={() => {
              setbgColor('#a855f7');
            }}
            className="bg-purple-500 px-4 py-1 rounded-xl text-white capitalize"
          >
            purple
          </button>
          <button
            onClick={() => {
              setbgColor('#dfc5fe');
            }}
            className="bg-[#dfc5fe] px-4 py-1 rounded-xl text-white capitalize"
          >
            lavender
          </button>
          <button
            onClick={() => {
              setbgColor('#ffffff');
            }}
            className="bg-white px-4 py-1 rounded-xl text-black capitalize"
          >
            white
          </button>
          <button
            onClick={() => {
              setbgColor('#000000');
            }}
            className="bg-black px-4 py-1 rounded-xl text-white capitalize"
          >
            black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
