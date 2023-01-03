import React from "react";
import Link from "next/link";
import Image from "next/image";

const asciiHeader = [
"  ..|***.|                    ||              *||    ||*          ..|***.|            ||                  ",
" .|*     *   ....   .... ... ...  .. ...       |||  |||    ....  .|*     *  ... ...  ...  ... ..    ....  ",
" ||    .... ** .||   *|.  |   ||   ||  ||      |*|..*||  .|   ** ||    ....  ||  ||   ||   ||* ** .|...|| ",
" *|.    ||  .|* ||    *|.|    ||   ||  ||      | *|* ||  ||      *|.    ||   ||  ||   ||   ||     ||      ",
"  **|...*|  *|..*|*    *|    .||. .||. ||.    .|. | .||.  *|...*  **|...*|   *|..*|. .||. .||.     *|...* ",
]

export default function Header() {
  return (
    <header className="mx-16 py-10">
       
      <div className="text-white flex container font-mono whitespace-pre ">
        {asciiHeader[0]}<br></br>
        {asciiHeader[1]}<br></br>
        {asciiHeader[2]}<br></br>
        {asciiHeader[3]}<br></br>
        {asciiHeader[4]}<br></br>
        {asciiHeader[5]}
      </div>
    </header>
  );
}
