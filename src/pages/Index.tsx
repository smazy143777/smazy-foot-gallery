import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Upload, Users, Trophy, ArrowRight } from "lucide-react";

const Index = () => {
  const featuredContent = [
    {
      id: 1,
      title: "Amazing Sunset Photo",
      author: "PhotoPro123",
      likes: 1247,
      category: "Photography"
    },
    {
      id: 2,
      title: "Digital Art Masterpiece",
      author: "ArtisticSoul",
      likes: 892,
      category: "Digital Art"
    },
    {
      id: 3,
      title: "Street Photography",
      author: "UrbanExplorer",
      likes: 2156,
      category: "Photography"
    },
    {
      id: 4,
      title: "Creative Design Work",
      author: "DesignGuru",
      likes: 734,
      category: "Design"
    }
  ];

  const howItWorksSteps = [
    {
      icon: Upload,
      title: "Submit Your Feet",
      description: "Upload your best work through our Discord community or website submission form."
    },
    {
      icon: Users,
      title: "Smazy Review",
      description: "Our community votes and provides feedback on submitted content."
    },
    {
      icon: Trophy,
      title: "Get Featured",
      description: "Top-rated content gets featured on the main gallery for everyone to see."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Curated by Smazy
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Show Case Your Feet
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of creators and have your content featured in Smazy's curated gallery of exceptional user submissions.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your content featured is simple. Follow these three easy steps to join our community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {howItWorksSteps.map((step, index) => (
            <Card key={index} className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Content</h2>
          <p className="text-lg text-muted-foreground">
            Check out some of the amazing content our community has created
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {featuredContent.map((content) => (
            <Card key={content.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{content.title}</CardTitle>
                    <CardDescription className="text-sm">by {content.author}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {content.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 mr-1 fill-primary text-primary" />
                  {content.likes.toLocaleString()} likes
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Content
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Featured?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of creators who have already shared their amazing work with our community.
            </p>
            <Button size="lg" className="text-lg px-8">
              Start Submitting Today
              <Upload className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
