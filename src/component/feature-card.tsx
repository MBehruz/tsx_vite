import { FC } from "react";
import { features } from "../util/constant";
import { styles } from "../util/style";
import { motion } from "framer-motion";
interface Props {
    icon: JSX.Element;
    title: string;
    content: any
    idx: number

}

const FeatureCard: FC<Props> = ({ icon, title, content, idx }) => {
    return (
        <div
            className={`flex flex-row p-6 rounded-[20px] feature-card cursor-pointer ${idx === features.length - 1 ? "mb-0" : "mb-6"
                }`}
        >
            <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{
                    default: { duration: 0.8, ease: "easeInOut" },
                    fill: { duration: 0.1, ease: [0.1, 0, 0.1, 0.1] }
                }}
                whileTap={{ rotate: 360, }}
                className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-lightBlue`}
            >
                {icon}
            </motion.div>

            <div className={`flex-1 flex flex-col ml-3`}>
                <h4
                    className={`font-montserrat font-semibold text-white text-[18px] leading-[23px] mb-1`}
                >
                    {title}
                </h4>
                <p className="font-montserrat font-normal text-lightWhite text-[16px] leading-[24px]">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard;
