
export const products = [
  // Education Products
  {
    id: "udemy-python",
    name: "The Complete Python Bootcamp",
    description: "Learn Python like a professional! Start from the basics and go all the way to creating your own applications and games!",
    price: 12500,
    originalPrice: 25000,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    partnerId: "udemy",
    partnerName: "Udemy",
    verticalId: "edu",
    interestRate: 5,
    specifications: [
      "49.5 hours on-demand video",
      "25 articles",
      "19 coding exercises",
      "Full lifetime access",
      "Certificate of completion"
    ]
  },
  {
    id: "coursera-data-science",
    name: "IBM Data Science Professional Certificate",
    description: "Kickstart your career in data science & ML. Build data science skills, learn Python & SQL, analyze & visualize data, build machine learning models.",
    price: 36000,
    originalPrice: 45000,
    discountPercentage: 20,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    partnerId: "coursera",
    partnerName: "Coursera",
    verticalId: "edu",
    interestRate: 4.5,
    specifications: [
      "9 course specialization",
      "Hands-on projects",
      "IBM Digital Badge",
      "Flexible schedule",
      "Beginner level"
    ]
  },
  
  // Shopping Products
  {
    id: "jumia-iphone",
    name: "Apple iPhone 14 Pro - 128GB - Deep Purple",
    description: "The iPhone 14 Pro features a 6.1-inch Super Retina XDR display, A16 Bionic chip, and an enhanced camera system with a 48MP main camera.",
    price: 178000,
    originalPrice: null,
    discountPercentage: null,
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    partnerId: "jumia",
    partnerName: "Jumia",
    verticalId: "shop",
    interestRate: 4,
    specifications: [
      "6.1-inch Super Retina XDR display",
      "A16 Bionic chip",
      "48MP main camera",
      "128GB storage",
      "iOS 16"
    ]
  },
  {
    id: "carrefour-tv",
    name: "Samsung 55\" Crystal UHD 4K Smart TV",
    description: "Experience crystal-clear 4K resolution and smart TV capabilities with this Samsung 55-inch TV. Perfect for streaming your favorite content.",
    price: 65000,
    originalPrice: 80000,
    discountPercentage: 19,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    partnerId: "carrefour",
    partnerName: "Carrefour",
    verticalId: "shop",
    interestRate: 4.5,
    specifications: [
      "55-inch screen",
      "4K UHD resolution",
      "Smart TV capabilities",
      "Multiple HDMI ports",
      "Built-in Wi-Fi"
    ]
  },
  
  // Events Products
  {
    id: "baobabs-festival",
    name: "Kilifi New Year Festival 2025 - Full Pass",
    description: "Ring in the New Year at Kenya's most iconic festival. 4 days of music, art, and community at Beneath the Baobabs in Kilifi.",
    price: 12000,
    originalPrice: 15000,
    discountPercentage: 20,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    partnerId: "baobabs",
    partnerName: "Beneath The Baobabs",
    verticalId: "event",
    interestRate: 4,
    specifications: [
      "4-day festival pass",
      "Dec 29 - Jan 2",
      "Camping included",
      "35+ international artists",
      "Food & drink vendors"
    ]
  },
  {
    id: "blankets-vip",
    name: "Blankets & Wine VIP Experience",
    description: "Enjoy Kenya's premier afro-based music festival in style with VIP access, premium drinks, and exclusive viewing areas.",
    price: 8500,
    originalPrice: null,
    discountPercentage: null,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    partnerId: "blankets",
    partnerName: "Blankets & Wine",
    verticalId: "event",
    interestRate: 4.5,
    specifications: [
      "VIP access",
      "Premium drink selection",
      "Exclusive viewing area",
      "VIP parking",
      "Artist meet & greet opportunity"
    ]
  },
  
  // Travel Products
  {
    id: "jambojet-mombasa",
    name: "Nairobi to Mombasa Return Flights",
    description: "Convenient flights between Nairobi and Mombasa. Book now and pay later with Kelo.",
    price: 16000,
    originalPrice: 20000,
    discountPercentage: 20,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    partnerId: "jambojet",
    partnerName: "Jambojet",
    verticalId: "travel",
    interestRate: 5,
    specifications: [
      "Round trip ticket",
      "Flexible dates",
      "15kg checked baggage",
      "7kg cabin baggage",
      "Web check-in available"
    ]
  },
  {
    id: "bonfire-coast",
    name: "3-Night Coastal Getaway - Diani Beach",
    description: "Enjoy a relaxing 3-night stay at Diani Beach with flights, accommodation, and activities included.",
    price: 45000,
    originalPrice: 55000,
    discountPercentage: 18,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    partnerId: "bonfire",
    partnerName: "Bonfire Adventures",
    verticalId: "travel",
    interestRate: 6,
    specifications: [
      "3 nights accommodation",
      "Return flights",
      "Airport transfers",
      "Daily breakfast",
      "Sunset dhow cruise"
    ]
  },
  
  // Home Products
  {
    id: "hotpoint-fridge",
    name: "Samsung 310L Double Door Refrigerator",
    description: "Energy-efficient double door refrigerator with digital inverter technology for optimal food storage.",
    price: 85000,
    originalPrice: 95000,
    discountPercentage: 11,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    partnerId: "hotpoint",
    partnerName: "Hotpoint Appliances",
    verticalId: "home",
    interestRate: 5.5,
    specifications: [
      "310L capacity",
      "Digital inverter technology",
      "Energy efficiency rating: A++",
      "Multi-flow cooling",
      "2-year warranty"
    ]
  },
  {
    id: "moko-sofa",
    name: "Moko 5-Seater L-Shaped Sofa",
    description: "Modern L-shaped sofa perfect for family gatherings. Durable fabric and comfortable cushioning.",
    price: 65000,
    originalPrice: 78000,
    discountPercentage: 17,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    partnerId: "moko",
    partnerName: "Moko Home + Living",
    verticalId: "home",
    interestRate: 6,
    specifications: [
      "5-seater L-shaped design",
      "Premium fabric upholstery",
      "Solid wood frame",
      "High-density foam cushions",
      "Free delivery in Nairobi"
    ]
  }
];
