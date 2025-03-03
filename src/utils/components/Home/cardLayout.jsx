import React from "react";
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function HorizontalCard({ title, category, description, image }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="h-full">
      <Card className="w-full flex flex-col md:flex-row h-full transition-all duration-300 hover:shadow-xl bg-amber-100 hover:border-blue-50">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-full md:w-2/5 shrink-0 rounded-b-none md:rounded-r-none overflow-hidden"
        >
          <motion.img
            src={image}
            alt={title}
            className="h-48 md:h-full w-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </CardHeader>
        <CardBody className="flex flex-col justify-between p-4 md:p-6">
          <div>
            <Typography variant="small" color="blue" className="mb-2 font-bold uppercase tracking-wider">
              {category}
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2 font-bold">
              {title}
            </Typography>
            <Typography color="gray" className="mb-6 font-normal text-gray-600">
              {description}
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <motion.div whileHover={{ x: 5 }}>
              <Button
                size="sm"
                variant="filled"
                color="blue"
                className="flex items-center gap-2 rounded-full"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </motion.div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default function HorizontalCardList({ cards = [], className = "", containerVariants, childVariants }) {
  const defaultCards = [
    {
      title: "MERN (MongoDB, Express, React, Node)",
      category: "Web Development",
      description: "Like so many organizations tpany selling licenses. Yet its own business model disruption is only part of the story.",
      image: "https://res.cloudinary.com/dufxj1sau/image/upload/v1739439665/Course-logo/ipyhmia3qx5e2ykcy9ep.jpg",
    },
    {
      title: "DCA ( Diploma in Computer Applications )",
      category: "Computer course",
      description: "Tesla's new battery technology aims to improve efficiency and reduce costs, making electric vehicles more accessible to a wider audience.",
      image: "https://res.cloudinary.com/dufxj1sau/image/upload/v1739439665/Course-logo/ubra8mifjr9kdlzs4rht.jpg",
    },
    {
      title: "Adobe Premiere Pro",
      category: "Video Editing",
      description: "With AI-driven insights, businesses can tailor their marketing strategies with unprecedented precision and effectiveness.",
      image: "https://res.cloudinary.com/dufxj1sau/image/upload/v1740822798/Course-logo/wohubwesdiazaqi4cfze.jpg",
    },
    {
      title: "Autocad",
      category: "Architecture",
      description: "Tesla's new battery technology aims to improve efficiency and reduce costs, making electric vehicles more accessible to a wider audience.",
      image: "https://res.cloudinary.com/dufxj1sau/image/upload/v1739439665/Course-logo/wxqkfh8qi3pcdzuhqjga.jpg",
    }
  ];

  const cardsToRender = cards.length > 0 ? cards : defaultCards;

  return (
    <div className="space-y-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 ${className}`}
      >
        {cardsToRender.map((card, index) => (
          <motion.div key={index} variants={childVariants}>
            <HorizontalCard {...card} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
        className="flex justify-center"
      >
        <Link to="/courses">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            Explore All Courses
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              animate={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}