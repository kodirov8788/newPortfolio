import Link from "next/link";
import Type from "./Type";
import { BiLink } from "react-icons/bi";
import Image from "next/image";
const Home = () => {
  return (
    <section>
      <div className="w-full min-h-screen flex bg-yellow-400 justify-between relative px-16 pt-10 text-white">
        <div className="w-10/12 px-5 py-2 bg-yellow-800 rounded min-h-full ">
          <h1 className="text-2xl">Hi There!</h1>
          <div className="text-4xl w-full flex mt-16">
            <br />
            <h1>
              Welcome to <strong className=""> My Portfolio </strong>
            </h1>
            <span className="wave " role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </div>

          <div className="text-xl mt-10 flex">
            <h4 className="text-2xl">
              I`m <strong> Mukhammadali</strong>
            </h4>
          </div>
          <div>
            <h1 className="text-5xl font-bold mt-2">
              I build responsive websites from 0
            </h1>
          </div>
          <div className="w-2/4 font-normal text-2xl mt-3">
            <Type />
          </div>
          <div className="mt-5 flex justify-between w-7/12 relative">
            <h2 className="text-2xl">
              If you are interested in my works,
              <span className="space-x-4"></span> Please...
            </h2>

            <Link href="https://t.me/kodirovdev" target="_blank">
              <a
                className="border flex absolute w-auto right-0 h-full bg-green-200 text-gray-900 hover:bg-green-50 hover:text-gray-900 duration-150 rounded text-xl items-center px-2"
                rel="noreferrer"
              >
                <span> Message me</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="w-200 h-auto absolute top-16 right-16">
          <div className="w-80 h-80 bg-blue-900 rounded-full overflow-hidden">
            <Image
              className=""
              src="/assets/Kodirov.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
