import React, { useEffect, useState } from "react";
import "./FloatingClouds.css";

// Local SVG icon paths in public/icons/
const awsCoreServices = [
  { src: '/icons/ec2.svg', label: 'EC2' },
  { src: '/icons/s3.svg', label: 'S3' },
  { src: '/icons/vpc.svg', label: 'VPC' },
  { src: '/icons/iam.svg', label: 'IAM' },
  { src: '/icons/rds.svg', label: 'RDS' },
  { src: '/icons/lambda.svg', label: 'Lambda' },
];

const awsAIServices = [
  { src: '/icons/sagemaker.svg', label: 'SageMaker' },
  { src: '/icons/rekognition.svg', label: 'Rekognition' },
  { src: '/icons/comprehend.svg', label: 'Comprehend' },
];

const smallClouds = [
  { src: '/icons/cloud1.svg', label: 'cloud' },
  { src: '/icons/cloud2.svg', label: 'cloud' },
];

const FloatingClouds: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const totalItems = 25; // total floating icons
    const icons: any[] = [];

    for (let i = 0; i < totalItems; i++) {
      // Randomly pick service or cloud, favor AWS services
      const isAWSService = Math.random() > 0.25;
      const pickFrom = isAWSService
        ? Math.random() > 0.5
          ? awsCoreServices
          : awsAIServices
        : smallClouds;

      const picked = pickFrom[Math.floor(Math.random() * pickFrom.length)];

      icons.push({
        id: i,
        src: picked.src,
        label: picked.label,
        // size in px between 50 and 100
        size: Math.round(50 + Math.random() * 50),
        top: Math.round(Math.random() * 10000) / 100, // two decimal percent
        left: Math.round(Math.random() * 10000) / 100,
        duration: Number((18 + Math.random() * 24).toFixed(2)), // 18-42s
        delay: Number((Math.random() * 10).toFixed(2)),
      });
    }

    setItems(icons);
  }, []);

  return (
    <div className="floating-clouds-container" aria-hidden="true">
      {items.map((item) => (
        <img
          key={item.id}
          src={item.src}
          alt={item.label}
          className="floating-cloud"
          style={{
            width: `${item.size}px`,
            height: 'auto',
            top: `${item.top}%`,
            left: `${item.left}%`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            // ensure the element is centered at the given top/left
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingClouds;
