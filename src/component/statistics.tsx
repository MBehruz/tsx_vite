

import { statistics } from "../util/constant";
import { styles } from "../util/style";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Statistics = () => {
    return (
        <div className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
            {statistics?.map((stat) => {
                const count = useMotionValue(0);
                const rounded = useTransform(count, Math.round);

                useEffect(() => {
                    const numericValue = parseFloat(stat.value.replace(/[^\d.]/g, ''));
                    const animation = animate(count, numericValue, { duration: 10 });

                    return () => animation.stop();
                }, [stat.value]);

                const suffix = stat.value.replace(/[\d.]/g, '');

                return (
                    <div
                        key={stat.id}
                        className="flex-1 flex justify-start items-center flex-row m-3"
                    >
                        <h4 className="font-montserrat font-semibold xs:text-[41px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
                            <motion.span>{rounded}</motion.span>{suffix}
                        </h4>
                        <p className="font-montserrat font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[22px] text-gradient uppercase ml-3">
                            {stat.title}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Statistics;

