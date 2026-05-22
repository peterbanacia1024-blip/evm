import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, X, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { mockEvents } from "@/data/mockEvents";
import { toast } from "@/hooks/use-toast";

const MyEvents = () => {
  const registeredEvents = mockEvents.slice(0, 3);
  const pastEvents = mockEvents.slice(3, 5);

  const handleCancelRegistration = (eventTitle: string) => {
    toast({
      title: "Registration Cancelled",
      description: `Your registration for ${eventTitle} has been cancelled.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-8 md:pt-28 md:pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-2">My Events</h1>
          <p className="text-muted-foreground">
            Manage your event registrations and history
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="upcoming" className="gap-2">
                <CalendarCheck className="w-4 h-4" />
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="past" className="gap-2">
                <Calendar className="w-4 h-4" />
                Past Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              {registeredEvents.length > 0 ? (
                <div className="space-y-4">
                  {registeredEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-card rounded-2xl border border-border p-6 flex flex-col md:flex-row gap-6"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full md:w-48 h-32 md:h-36 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <Badge className="mb-2">{event.category}</Badge>
                            <h3 className="font-display font-bold text-xl">{event.title}</h3>
                          </div>
                          <Badge
                            variant="outline"
                            className="bg-success/10 text-success border-success/30"
                          >
                            Registered
                          </Badge>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-sm line-clamp-1">{event.location}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Link to={`/events/${event.id}`}>
                            <Button variant="gradient" size="sm">
                              View Details
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 text-destructive hover:bg-destructive/10"
                            onClick={() => handleCancelRegistration(event.title)}
                          >
                            <X className="w-4 h-4" />
                            Cancel Registration
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-card rounded-2xl border border-border">
                  <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                    <CalendarCheck className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">No upcoming events</h3>
                  <p className="text-muted-foreground mb-6">
                    You haven't registered for any events yet
                  </p>
                  <Link to="/events">
                    <Button variant="gradient">Browse Events</Button>
                  </Link>
                </div>
              )}
            </TabsContent>

            <TabsContent value="past">
              {pastEvents.length > 0 ? (
                <div className="space-y-4">
                  {pastEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-card rounded-2xl border border-border p-6 flex flex-col md:flex-row gap-6 opacity-75"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full md:w-48 h-32 md:h-36 rounded-xl object-cover grayscale"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <Badge variant="secondary" className="mb-2">{event.category}</Badge>
                            <h3 className="font-display font-bold text-xl">{event.title}</h3>
                          </div>
                          <Badge variant="outline">Attended</Badge>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm line-clamp-1">{event.location}</span>
                          </div>
                        </div>

                        <Link to={`/events/${event.id}`}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-card rounded-2xl border border-border">
                  <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">No past events</h3>
                  <p className="text-muted-foreground">
                    Your event history will appear here
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyEvents;
