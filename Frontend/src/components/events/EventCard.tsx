import { Link } from "react-router-dom";
import { MapPin, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
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
}

const EventCard = ({
  id,
  title,
  description,
  date,
  time,
  location,
  image,
  category,
  attendees,
  capacity,
  isFeatured = false,
}: EventCardProps) => {
  const spotsLeft = capacity - attendees;
  const isAlmostFull = spotsLeft <= 10;

  return (
    <div className={`group bg-card rounded-2xl overflow-hidden border border-border card-hover ${isFeatured ? 'shadow-glow' : 'shadow-md'}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {/* Category Badge */}
        <Badge
          className="absolute top-4 left-4 bg-primary/90 text-primary-foreground border-0"
        >
          {category}
        </Badge>

        {/* Featured Badge */}
        {isFeatured && (
          <Badge className="absolute top-4 right-4 gradient-accent text-accent-foreground border-0">
            Featured
          </Badge>
        )}

        {/* Date Overlay */}
        <div className="absolute bottom-4 left-4 text-primary-foreground">
          <p className="text-2xl font-display font-bold">{date.split(" ")[1]}</p>
          <p className="text-sm opacity-90">{date.split(" ")[0]}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Meta Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-primary" />
            <span className={isAlmostFull ? "text-accent font-medium" : "text-muted-foreground"}>
              {spotsLeft} spots left
            </span>
          </div>
        </div>

        {/* Action */}
        <Link to={`/events/${id}`}>
          <Button variant="gradient" className="w-full">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
