import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FeaturedEventProps {
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
}

const FeaturedEvent = ({
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
}: FeaturedEventProps) => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-xl group">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-64 md:h-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-foreground/20" />
          
          {/* Mobile Overlay Content */}
          <div className="absolute bottom-4 left-4 md:hidden">
            <Badge className="gradient-accent text-accent-foreground border-0 mb-2">
              Featured Event
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="hidden md:block mb-4">
            <Badge className="gradient-accent text-accent-foreground border-0 text-sm px-3 py-1">
              Featured Event
            </Badge>
          </div>
          
          <Badge variant="outline" className="w-fit mb-3">
            {category}
          </Badge>

          <h2 className="font-display font-bold text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors">
            {title}
          </h2>

          <p className="text-muted-foreground mb-6 line-clamp-2">
            {description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Date</p>
                <p className="font-medium text-sm">{date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Time</p>
                <p className="font-medium text-sm">{time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-medium text-sm line-clamp-1">{location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Attendees</p>
                <p className="font-medium text-sm">{attendees}/{capacity}</p>
              </div>
            </div>
          </div>

          <Link to={`/events/${id}`}>
            <Button variant="hero" size="lg" className="w-full md:w-auto gap-2">
              Register Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvent;
