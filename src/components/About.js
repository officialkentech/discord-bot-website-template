import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why use this bot?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Speed</h4>
              <p className="p-color">
                Bot Generates Fast Responses!
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">🟢 99.9% Online</h4>
              <p className="p-color">
                We Try To Keep Our Bot Online 24/7 With The Help Of Our Amazing Supporters!
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">💵 Price</h4>
              <p className="p-color">
                #1 Discord AI Generation Bot For It's Price!
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Check out Commands &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">20+</h4>
            <p className="p-color">Total Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">50+</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">500+</h4>
            <p className="p-color">Total Commands Ran</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
