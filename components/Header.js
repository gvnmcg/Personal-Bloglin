import React from "react";
import Link from "next/link";
import Image from "next/image";

const asciiHeader = [
  "  ..|***.|                    ||              *||    ||*          ..|***.|            ||                  ",
  " .|*     *   ....   .... ... ...  .. ...       |||  |||    ....  .|*     *  ... ...  ...  ... ..    ....  ",
  " ||    .... ** .||   *|.  |   ||   ||  ||      |*|..*||  .|   ** ||    ....  ||  ||   ||   ||* ** .|...|| ",
  " *|.    ||  .|* ||    *|.|    ||   ||  ||      | *|* ||  ||      *|.    ||   ||  ||   ||   ||     ||      ",
  "  **|...*|  *|..*|*    *|    .||. .||. ||.    .|. | .||.  *|...*  **|...*|   *|..*|. .||. .||.     *|...* ",
];

export default function Header() {
  return (
    <header className="m-4 w-full py-10">
      <Image width={500} height={300} src={"/assets/images/signPrint.png"}/>
    </header>
  );
}
