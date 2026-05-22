import { useState } from "react";
import { User, Mail, Phone, MapPin, Camera, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Event enthusiast passionate about technology and networking. Always looking for new experiences and connections.",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-8 md:pt-28 md:pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-2">Profile</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <form onSubmit={handleSubmit}>
            <Card className="border-border mb-6">
              <CardHeader>
                <CardTitle className="font-display">Profile Picture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" />
                      <AvatarFallback className="text-2xl">JD</AvatarFallback>
                    </Avatar>
                    <button
                      type="button"
                      className="absolute bottom-0 right-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground shadow-lg"
                    >
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Update your photo</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Recommended size: 200x200px, Max 5MB
                    </p>
                    <Button type="button" variant="outline" size="sm">
                      Upload Image
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border mb-6">
              <CardHeader>
                <CardTitle className="font-display">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border mb-6">
              <CardHeader>
                <CardTitle className="font-display">Account Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <p className="text-2xl font-display font-bold text-primary">12</p>
                    <p className="text-sm text-muted-foreground">Events Attended</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <p className="text-2xl font-display font-bold text-primary">3</p>
                    <p className="text-sm text-muted-foreground">Upcoming Events</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <p className="text-2xl font-display font-bold text-primary">8</p>
                    <p className="text-sm text-muted-foreground">Saved Events</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <p className="text-2xl font-display font-bold text-primary">5</p>
                    <p className="text-sm text-muted-foreground">Categories</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button type="submit" variant="hero" size="lg" className="gap-2">
                <Save className="w-5 h-5" />
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
