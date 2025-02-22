import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";

const dummyData = [
  {
    id: "card-1",
    title: "Introduction to UI/UX",
    description: "Learn the basics of UI/UX design with hands-on projects.",
    image: "https://source.unsplash.com/400x300/?design,technology",
  },
  {
    id: "card-2",
    title: "Advanced Web Development",
    description: "Deep dive into full-stack web development with modern tools.",
    image: "https://source.unsplash.com/400x300/?coding,technology",
  },
  {
    id: "card-3",
    title: "Data Science Essentials",
    description: "Master the fundamentals of data analysis and machine learning.",
    image: "https://source.unsplash.com/400x300/?data,science",
  },
  {
    id: "card-4",
    title: "Cybersecurity Basics",
    description: "Understand the core principles of cybersecurity and protection.",
    image: "https://source.unsplash.com/400x300/?security,hacking",
  },
  // Add more dummy data as needed
];

const CardGrid = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setCardData(dummyData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cardData.map((card) => (
        <div key={card.id} id={card.id} className="card-container">
          <Card className="w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={card.image} alt="card-image" className="w-full h-full object-cover" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {card.title}
              </Typography>
              <Typography>{card.description}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
