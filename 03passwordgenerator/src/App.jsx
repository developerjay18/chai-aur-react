import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState('123');

  let passwordRef = useRef(null);

  // password geneartor function + useCallback hook
  let generatePassword = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = 1234567890;
    let chars = "!@#$%^&*()-=_+[]{}|;':,.<>?/~`";

    if (numberAllowed) str += numbers;
    if (charAllowed) str += chars;

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1); // bug tha yaha pe. remember next time
      pass += str.charAt(charIndex);
    }

    console.log(pass);
    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

  // useEffect
  useEffect(() => {
    generatePassword();
  }, [charAllowed, numberAllowed, length, generatePassword]);

  // copy to clipboard
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="main-container bg-black h-screen text-white py-10">
        {/* password generator box starts */}
        <div className="generator text-center bg-slate-700 flex flex-col w-[70%] mx-auto py-3 rounded-lg">
          {/* input area starts */}
          <div className="input-area w-[95%] mx-auto">
            <input
              type="text"
              name="password"
              id="password"
              readOnly
              value={password}
              ref={passwordRef}
              className="py-[9px] px-2 w-[90%] rounded-l-lg text-black font-semibold text-lg outline-none"
            />
            <button
              className="px-3 bg-blue-600 rounded-r-lg py-3 w-[10%]"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
          {/* input area ends */}

          {/* chosings area starts */}
          <div className="chosings mt-3 w-[95%] mx-auto flex items-center gap-8">
            <div className="choices flex items-center gap-2">
              <input
                type="range"
                name="length"
                min={8}
                max={20}
                id="length"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-lg">length ({length})</label>
            </div>
            <div className="choices flex items-center gap-2">
              <input
                type="checkbox"
                name="num-approval"
                id="num-approval"
                defaultChecked={numberAllowed}
                onClick={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label className="text-lg">Numbers</label>
            </div>
            <div className="choices flex items-center gap-2">
              <input
                type="checkbox"
                name="char-approval"
                id="char-approval"
                defaultChecked={charAllowed}
                onClick={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label className="text-lg">characters</label>
            </div>
          </div>
          {/* chosings area ends */}
        </div>
        {/* password generator box ends */}
      </div>
    </>
  );
}

export default App;