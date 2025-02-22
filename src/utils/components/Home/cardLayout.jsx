import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  export function HorizontalCard({ title, category, description, image }) {
    return (
      <Card className="horizontal-card w-full max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="horizontal-card-header m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="horizontal-card-image h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="horizontal-card-body">
          <Typography variant="h6" color="gray" className="horizontal-card-category mb-4 uppercase">
            {category}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="horizontal-card-title mb-2">
            {title}
          </Typography>
          <Typography color="gray" className="horizontal-card-description mb-8 font-normal">
            {description}
          </Typography>
          <a href="#" className="horizontal-card-link inline-block">
            <Button variant="text" className="horizontal-card-button flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }
  
  export default function HorizontalCardList() {
    const cards = [
      {
        title: "MERN (MongoDB, Express, React, Node)",
        category: "Web Development",
        description: "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.",
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
        image: "https://res.cloudinary.com/dufxj1sau/image/upload/v1740218292/premier_pro_last_enhanced_ahb0un.png",
      },
    ];
  
    return (
      <div className="flex flex-col gap-6">
        {cards.map((card, index) => (
          <HorizontalCard 
            key={index}
            title={card.title}
            category={card.category}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    );
  }
  