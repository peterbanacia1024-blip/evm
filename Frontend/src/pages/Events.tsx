import { useState } from "react";
import { Search, Filter, MapPin, Calendar as CalendarIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EventCard from "@/components/events/EventCard";
import { mockEvents, eventCategories } from "@/data/mockEvents";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    
    const matchesLocation =
      selectedLocation === "all" ||
      (selectedLocation === "online" && event.isOnline) ||
      (selectedLocation === "in-person" && !event.isOnline);

    return matchesSearch && matchesCategory && matchesLocation;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedLocation("all");
  };

  const hasActiveFilters =
    searchQuery !== "" || selectedCategory !== "All" || selectedLocation !== "all";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-8 md:pt-28 md:pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-2">
            Discover Events
          </h1>
          <p className="text-muted-foreground">
            Find and join events that match your interests
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 h-11">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-card">
                {eventCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full md:w-48 h-11">
                <MapPin className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent className="bg-card">
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="in-person">In-Person</SelectItem>
                <SelectItem value="online">Online</SelectItem>
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="gap-2 text-muted-foreground"
              >
                <X className="w-4 h-4" />
                Clear
              </Button>
            )}
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mt-4">
              {searchQuery && (
                <Badge variant="secondary" className="gap-1">
                  Search: {searchQuery}
                  <X
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => setSearchQuery("")}
                  />
                </Badge>
              )}
              {selectedCategory !== "All" && (
                <Badge variant="secondary" className="gap-1">
                  {selectedCategory}
                  <X
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => setSelectedCategory("All")}
                  />
                </Badge>
              )}
              {selectedLocation !== "all" && (
                <Badge variant="secondary" className="gap-1">
                  {selectedLocation === "online" ? "Online" : "In-Person"}
                  <X
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => setSelectedLocation("all")}
                  />
                </Badge>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-6">
                Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                <CalendarIcon className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">No events found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search terms
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
