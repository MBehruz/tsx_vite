import './App.css';
import {
  Billing,
  Bussines,
  Clients,
  Contract,
  Cta,
  Footer,
  Home,
  Navbar,
  Statistics,
  Testimonials,
} from './component';
import { styles } from './util/style';
import { motion, useScroll } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  return (

    <div className='bg-primary w-full overflow-hidden'>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Home */}
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      {/* Statistics */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Billing />
          <Bussines />
          <Testimonials />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>

  );
};

export default App;
