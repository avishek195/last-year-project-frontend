import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon, title, description, delay, path }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
        <Link to={path} className="no-underline">
          <CardContent className="text-center p-6">
            <div className="text-4xl mb-4">{icon}</div>
            <Typography variant="h6" className="text-indigo-700 font-semibold">
              {title}
            </Typography>
            <Typography className="text-gray-600 mt-2">
              {description}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
