import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commands | Aurora</title>
        <meta
          name="description"
          content="Commands page | Aurora"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Generation ✨
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/imagine</kbd> -{" "}
                  <span className="p-color">Generate A Image With AI</span>
                </li>
                <li>
                  <kbd>/generate</kbd> -{" "}
                  <span className="p-color">Generate Responses With AI</span>
                </li>
                <li>
                  <kbd>/code</kbd> -{" "}
                  <span className="p-color">Generate Code With AI</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Tools ⚙
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>/help</kbd> -{" "}
                  <span className="p-color">Help Menu</span>
                </li>
                <li>
                  <kbd>/ping</kbd> -{" "}
                  <span className="p-color">Bot Ping/Latency</span>
                </li>
               </ul>
          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
