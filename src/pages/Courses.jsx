import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import coursesData from "../utils/Data/Courses-page.js";
import "./Styles/Courses.css";

const CardGrid = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const normalizedData = coursesData.map((course) => ({
      id: course.id,
      title: course.CourseName || course.CourseNmae || course.COurseName,
      description: course.CourseDescription,
      image: course.CourseImaage,
    }));
    setCardData(normalizedData);
  }, []);

  return (
    <div className="main">
      <h1 className=" main-heading"> Courses Available</h1>
          <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-6 py-7  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {cardData.map((card) => (
        <motion.div
          key={card.id}
          className="w-full px-2 mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white rounded-2xl overflow-hidden">
            <motion.div whileHover={{ scale: 1.1 }} className="relative">
              <CardHeader className="relative h-full md:h-full overflow-hidden p-10">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-fit transition-transform duration-300"
                />
              </CardHeader>
            </motion.div>
            <CardBody className="flex-grow p-8">
              <Typography
                variant="h5"
                className="mb-2 text-lg md:text-xl font-semibold text-gray-800"
              >
                {card.title}
              </Typography>
              <Typography className="text-sm md:text-base text-gray-600">
                {card.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 pb-4 px-6">
              <motion.div whileTap={{ scale: 0.9 }}>
                <Button
                  fullWidth
                  className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 py-3 rounded-lg"
                >
                  View Course
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
    </div>
  );
};

export default CardGrid;
