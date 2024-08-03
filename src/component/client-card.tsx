import { FC } from "react";
import { styles } from "../util/style";
import { motion } from "framer-motion";
interface Props {
    logo: any,
    title: string
}

const ClientCard: FC<Props> = ({ logo, title }) => {
    return (
        <div
            className={`${styles.flexCenter} flex sm:min-w-[192px] min-w-[120px] m-5 cursor-pointer`}
        >
            <motion.div
                transition={{
                    default: { duration: 0.5, ease: "easeInOut" },
                    fill: { duration: 0.2, ease: [0.1, 0, 0.1, 0.1] }
                }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ rotate: 360, }}>
                {logo}
            </motion.div>
            <p className={`${styles.paragraph} font-semibold text-gradient`}>
                {title}
            </p>
        </div>
    );
};

export default ClientCard;
