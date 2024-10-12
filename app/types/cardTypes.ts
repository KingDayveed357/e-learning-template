interface CardProps {
    cardTitle: string;
    cardBody: string;
    number: string | number;
  
  }
  
  interface testimionalCardProps {
      clientName: string;
      avatar: StaticImageData;
      cardBody: string;
    }
  
  interface cardWithImage{
      cardTitle: string;
      cardBody: string;
      image: StaticImageData;
      courseCreator: string;
      courseDuration: string;
      courseLevel: string;
  }

  interface PricingCardProps {
    plan: string;
    amount: string | number;
    features: { icon: React.ReactNode; text: string }[]; // Using React.ReactNode for icon
  }
  
  interface FeaturesProps {
    icon: React.ReactNode; // React.ReactNode to support JSX elements like icons
    features: string;
  }
  
  