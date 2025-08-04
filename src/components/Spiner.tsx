import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Spinner = () => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            className="text-xl text-gray-500"
        >
            <AiOutlineLoading3Quarters />
        </motion.div>
    );
};

export default Spinner;
