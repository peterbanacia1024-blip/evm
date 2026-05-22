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
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mockEvents } from "@/data/mockEvents";
import { toast } from "@/hooks/use-toast";

const AdminEvents = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const filteredEvents = mockEvents.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navItems = [
    { name: "Dashboard", icon: BarChart3, path: "/admin" },
    { name: "Events", icon: Calendar, path: "/admin/events" },
    { name: "Users", icon: Users, path: "/admin/users" },
    { name: "Reports", icon: TrendingUp, path: "/admin/reports" },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleDelete = (eventTitle: string) => {
    toast({
      title: "Event Deleted",
      description: `${eventTitle} has been deleted.`,
    });
  };

  const handleTogglePublish = (eventTitle: string, isPublished: boolean) => {
    toast({
      title: isPublished ? "Event Unpublished" : "Event Published",
      description: `${eventTitle} has been ${isPublished ? "unpublished" : "published"}.`,
    });
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
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
        <header className="sticky top-0 z-40 h-16 bg-card/95 backdrop-blur border-b border-border flex items-center px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary mr-4"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="font-display font-bold text-xl">Events</h1>
          </div>
          <Link to="/admin/events/create">
            <Button variant="gradient" size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Create Event
            </Button>
          </Link>
        </header>

        <main className="flex-1 p-6">
          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Events Table */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Registrations</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {event.organizer}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p>{event.date}</p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </TableCell>
                    <TableCell>
                      <p className="line-clamp-1">{event.location}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{event.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <p>{event.attendees}/{event.capacity}</p>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          event.isFeatured
                            ? "bg-success/10 text-success border-success/30"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {event.isFeatured ? "Published" : "Draft"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-card">
                          <DropdownMenuItem className="gap-2">
                            <Edit className="w-4 h-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="gap-2"
                            onClick={() => handleTogglePublish(event.title, !!event.isFeatured)}
                          >
                            {event.isFeatured ? (
                              <>
                                <EyeOff className="w-4 h-4" />
                                Unpublish
                              </>
                            ) : (
                              <>
                                <Eye className="w-4 h-4" />
                                Publish
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="gap-2 text-destructive"
                            onClick={() => handleDelete(event.title)}
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminEvents;
