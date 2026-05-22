import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Share2,
  Heart,
  ArrowLeft,
  CheckCircle,
  Globe,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { mockEvents } from "@/data/mockEvents";
import { toast } from "@/hooks/use-toast";

const EventDetails = () => {
  const { id } = useParams();
  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 text-center">
          <h1 className="font-display font-bold text-2xl mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/events">
            <Button variant="gradient">Browse Events</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const spotsLeft = event.capacity - event.attendees;
  const fillPercentage = (event.attendees / event.capacity) * 100;

  const handleRegister = () => {
    toast({
      title: "Registration Successful!",
      description: `You've registered for ${event.title}. Check your email for confirmation.`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "Event link has been copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <section className="pt-16 relative">
        <div className="h-64 md:h-96 relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      </section>

      {/* Content */}
      <section className="py-8 -mt-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Events
              </Link>

              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-lg">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary/10 text-primary border-0">
                    {event.category}
                  </Badge>
                  {event.isOnline && (
                    <Badge variant="outline" className="gap-1">
                      <Globe className="w-3 h-3" />
                      Online Event
                    </Badge>
                  )}
                  {event.isFeatured && (
                    <Badge className="gradient-accent text-accent-foreground border-0">
                      Featured
                    </Badge>
                  )}
                </div>

                <h1 className="font-display font-bold text-2xl md:text-3xl mb-4">
                  {event.title}
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">Organized by {event.organizer}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-semibold">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-semibold">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl sm:col-span-2">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">{event.location}</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h2 className="font-display font-semibold text-xl mb-4">About This Event</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <Separator className="my-6" />

                <div>
                  <h2 className="font-display font-semibold text-xl mb-4">What to Expect</h2>
                  <ul className="space-y-3">
                    {[
                      "Networking opportunities with industry professionals",
                      "Interactive sessions and Q&A",
                      "Access to exclusive resources and materials",
                      "Certificate of attendance",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-lg sticky top-24">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Registration</span>
                    <span className="text-sm font-medium">{event.attendees}/{event.capacity}</span>
                  </div>
                  <Progress value={fillPercentage} className="h-2 mb-2" />
                  <p className={`text-sm ${spotsLeft <= 10 ? "text-accent font-medium" : "text-muted-foreground"}`}>
                    {spotsLeft} spots remaining
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground">Registration Deadline</span>
                    <span className="font-medium">{event.registrationDeadline}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground">Event Type</span>
                    <span className="font-medium">{event.isOnline ? "Online" : "In-Person"}</span>
                  </div>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full mb-3"
                  onClick={handleRegister}
                >
                  Register Now
                </Button>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 gap-2" onClick={handleShare}>
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <Heart className="w-4 h-4" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetails;
