import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
    styles?: string;
}

const Button: FC<Props> = ({ styles }): JSX.Element => {
    return (
        <motion.div
            className={`py-3 px-6 font-montserrat font-medium text-[18px] bg-blue-gradient 
                        rounded-[10px] outline-none cursor-pointer transition-transform 
                        duration-100 hover:translate-y-[-3px] ${styles}`}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.5, rotate: 360, }}
            transition={{
                default: { duration: 0.5, ease: "easeInOut" },
                fill: { duration: 0.2, ease: [0.1, 0, 0.1, 0.1] }
            }}
        >
            Button
        </motion.div>
    );
};

export default Button;
