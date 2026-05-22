export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  attendees: number;
  capacity: number;
  isFeatured?: boolean;
  organizer: string;
  registrationDeadline: string;
  isOnline: boolean;
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Tech Innovation Summit 2024",
    description: "Join industry leaders and innovators for a day of inspiring talks, workshops, and networking opportunities focused on the future of technology.",
    date: "Mar 15",
    time: "9:00 AM - 6:00 PM",
    location: "Convention Center, San Francisco, CA",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Technology",
    attendees: 342,
    capacity: 500,
    isFeatured: true,
    organizer: "TechHub Inc.",
    registrationDeadline: "Mar 10, 2024",
    isOnline: false,
  },
  {
    id: "2",
    title: "Startup Pitch Night",
    description: "Watch emerging startups pitch their ideas to top investors. Network with entrepreneurs and discover the next big thing.",
    date: "Mar 20",
    time: "6:00 PM - 9:00 PM",
    location: "Innovation Hub, New York, NY",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    category: "Business",
    attendees: 85,
    capacity: 100,
    organizer: "Venture Labs",
    registrationDeadline: "Mar 18, 2024",
    isOnline: false,
  },
  {
    id: "3",
    title: "Design Systems Workshop",
    description: "Learn how to build and maintain scalable design systems from industry experts. Hands-on workshop with practical exercises.",
    date: "Mar 22",
    time: "10:00 AM - 4:00 PM",
    location: "Online Event",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    category: "Design",
    attendees: 120,
    capacity: 150,
    organizer: "Design Academy",
    registrationDeadline: "Mar 21, 2024",
    isOnline: true,
  },
  {
    id: "4",
    title: "Marketing Masterclass",
    description: "Deep dive into digital marketing strategies that drive results. Learn from successful marketers and grow your business.",
    date: "Mar 25",
    time: "2:00 PM - 5:00 PM",
    location: "Online Event",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Marketing",
    attendees: 200,
    capacity: 300,
    organizer: "Growth Academy",
    registrationDeadline: "Mar 24, 2024",
    isOnline: true,
  },
  {
    id: "5",
    title: "AI & Machine Learning Conference",
    description: "Explore the latest advancements in artificial intelligence and machine learning with leading researchers and practitioners.",
    date: "Apr 01",
    time: "9:00 AM - 5:00 PM",
    location: "Tech Campus, Austin, TX",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    category: "Technology",
    attendees: 450,
    capacity: 600,
    isFeatured: true,
    organizer: "AI Institute",
    registrationDeadline: "Mar 28, 2024",
    isOnline: false,
  },
  {
    id: "6",
    title: "Creative Writing Workshop",
    description: "Unlock your creativity and develop your writing skills with published authors. Perfect for beginners and intermediate writers.",
    date: "Apr 05",
    time: "1:00 PM - 4:00 PM",
    location: "Community Arts Center, Seattle, WA",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    category: "Arts",
    attendees: 25,
    capacity: 30,
    organizer: "Writers Guild",
    registrationDeadline: "Apr 03, 2024",
    isOnline: false,
  },
  {
    id: "7",
    title: "Fitness & Wellness Expo",
    description: "Discover the latest in fitness, nutrition, and wellness. Meet trainers, try new workouts, and learn healthy living tips.",
    date: "Apr 10",
    time: "10:00 AM - 6:00 PM",
    location: "Sports Complex, Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    category: "Health",
    attendees: 380,
    capacity: 500,
    organizer: "Wellness Co.",
    registrationDeadline: "Apr 08, 2024",
    isOnline: false,
  },
  {
    id: "8",
    title: "Photography Bootcamp",
    description: "Intensive 2-day photography course covering composition, lighting, and post-processing. Bring your camera and creativity!",
    date: "Apr 15",
    time: "9:00 AM - 5:00 PM",
    location: "Studio 54, Chicago, IL",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    category: "Arts",
    attendees: 18,
    capacity: 25,
    organizer: "Photo Academy",
    registrationDeadline: "Apr 12, 2024",
    isOnline: false,
  },
];

export const eventCategories = [
  "All",
  "Technology",
  "Business",
  "Design",
  "Marketing",
  "Health",
  "Arts",
];
