import Link from "next/link";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">BOT</h1>
        <h2 className="showcase-header-text h-color">
          The only discord ai generation bot you need!
        </h2>
        <p className="showcase-para p-color">
          One of the awesome discord bot with tons of commands that will fill
          your needs in your discord server.
        </p>

        <span className="p-color">Bot is online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1236620717299077250&permissions=8&scope=applications.commands+bot">
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.gg/JV3hmehDww">
              Join server!
            </Link>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
