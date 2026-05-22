import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EventCard from "@/components/events/EventCard";
import FeaturedEvent from "@/components/events/FeaturedEvent";
import { mockEvents } from "@/data/mockEvents";

const Index = () => {
  const featuredEvent = mockEvents.find((e) => e.isFeatured);
  const upcomingEvents = mockEvents.filter((e) => !e.isFeatured).slice(0, 4);

  const stats = [
    { value: "10K+", label: "Events Hosted" },
    { value: "50K+", label: "Happy Attendees" },
    { value: "500+", label: "Organizers" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  const features = [
    {
      icon: Calendar,
      title: "Easy Event Creation",
      description: "Create and publish events in minutes with our intuitive interface.",
    },
    {
      icon: Users,
      title: "Seamless Registration",
      description: "Manage attendees effortlessly with automated confirmations.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security for your events and attendee data.",
    },
    {
      icon: Sparkles,
      title: "Smart Analytics",
      description: "Get insights on attendance, engagement, and event performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Discover Amazing Events Near You
            </div>

            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 animate-slide-up">
              Create & Discover
              <span className="block gradient-text">Unforgettable Events</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              The all-in-one platform for event organizers and attendees. Create, manage, and discover events that bring people together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/events">
                <Button variant="hero" size="xl" className="gap-2">
                  Explore Events
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="heroOutline" size="xl">
                  Start Organizing
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display font-bold text-3xl md:text-4xl gradient-text">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-2xl md:text-3xl">Featured Event</h2>
            </div>
            <FeaturedEvent {...featuredEvent} />
          </div>
        </section>
      )}

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground">Don't miss out on these exciting events</p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="gap-2 hidden sm:flex">
                View All Events
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/events">
              <Button variant="outline" className="gap-2">
                View All Events
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Powerful features to help you create memorable events and grow your community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden gradient-primary p-8 md:p-16 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
            
            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
                Ready to Create Your Event?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Join thousands of organizers who trust Eventify to manage their events. Get started for free today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/register">
                  <Button size="xl" className="bg-card text-foreground hover:bg-card/90 gap-2">
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="xl" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
