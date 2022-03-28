import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
          return (
                    <div className="flex flex-row items-center justify-between sm:justify-end p-6 border-t border-solid border-blueGray-200 rounded-b space-x-2">
                              <button className="btn btn-sm bg-sky-500 text-zinc-100 rounded-lg w-52 h-10">
                                        comenzar
                              </button>
                              <div className="grid grid-cols-2">
                                        <div className="text-3xl font-bold underline">
                                                  hola
                                        </div>
                                        <div>mundo</div>
                              </div>
                    </div>
          );
};

export default Home;
