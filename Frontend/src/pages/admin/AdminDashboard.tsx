import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Calendar,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  TrendingUp,
  CalendarCheck,
  UserPlus,
  Plus,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { mockEvents } from "@/data/mockEvents";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const stats = [
    {
      title: "Total Events",
      value: "24",
      change: "+3 this month",
      icon: Calendar,
      trend: "up",
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Total Users",
      value: "1,847",
      change: "+127 this month",
      icon: Users,
      trend: "up",
      color: "bg-success/10 text-success",
    },
    {
      title: "Upcoming Events",
      value: "8",
      change: "Next 30 days",
      icon: CalendarCheck,
      trend: "neutral",
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Registrations",
      value: "3,542",
      change: "+18% vs last month",
      icon: UserPlus,
      trend: "up",
      color: "bg-warning/10 text-warning",
    },
  ];

  const recentEvents = mockEvents.slice(0, 5);

  const navItems = [
    { name: "Dashboard", icon: BarChart3, path: "/admin" },
    { name: "Events", icon: Calendar, path: "/admin/events" },
    { name: "Users", icon: Users, path: "/admin/users" },
    { name: "Reports", icon: TrendingUp, path: "/admin/reports" },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-border">
            <Link to="/admin" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Calendar className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">
                Even<span className="text-primary">tify</span>
              </span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded hover:bg-secondary"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Admin User</p>
                <p className="text-xs text-muted-foreground truncate">admin@eventify.com</p>
              </div>
              <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 h-16 bg-card/95 backdrop-blur border-b border-border flex items-center px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary mr-4"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="font-display font-bold text-xl">Dashboard</h1>
          </div>
          <Link to="/admin/events/create">
            <Button variant="gradient" size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Create Event
            </Button>
          </Link>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    {stat.trend === "up" && (
                      <Badge variant="outline" className="text-success border-success/30 bg-success/10">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Up
                      </Badge>
                    )}
                  </div>
                  <p className="text-3xl font-display font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Events */}
            <Card className="lg:col-span-2 border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-display">Recent Events</CardTitle>
                <Link to="/admin/events">
                  <Button variant="ghost" size="sm" className="gap-1">
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.date} • {event.time}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress value={(event.attendees / event.capacity) * 100} className="h-1.5 w-24" />
                          <span className="text-xs text-muted-foreground">
                            {event.attendees}/{event.capacity}
                          </span>
                        </div>
                      </div>
                      <Badge variant={event.isFeatured ? "default" : "secondary"}>
                        {event.category}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions & Recent Activity */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-display">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/admin/events/create" className="block">
                    <Button variant="outline" className="w-full justify-start gap-3">
                      <Plus className="w-4 h-4" />
                      Create New Event
                    </Button>
                  </Link>
                  <Link to="/admin/users" className="block">
                    <Button variant="outline" className="w-full justify-start gap-3">
                      <Users className="w-4 h-4" />
                      Manage Users
                    </Button>
                  </Link>
                  <Link to="/admin/reports" className="block">
                    <Button variant="outline" className="w-full justify-start gap-3">
                      <BarChart3 className="w-4 h-4" />
                      View Reports
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-display">Registration Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Pending</span>
                      <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                        12
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Approved</span>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                        245
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Cancelled</span>
                      <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/30">
                        8
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
