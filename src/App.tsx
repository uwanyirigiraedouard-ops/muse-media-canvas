import * as React from "react";
import { motion } from "framer-motion";
import { 
  Video, 
  Music, 
  Mic2, 
  ArrowRight, 
  FolderHeart, 
  MessageSquareQuote, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/sonner";
import { FeedbackForm } from "@/components/FeedbackForm";

function App() {
  const features = [
    {
      title: "Video Generation",
      description: "You can now generate videos directly from your ideas. Turn text prompts into stunning visual narratives in seconds.",
      icon: <Video className="w-6 h-6 text-primary" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/db73bc7b-9f86-446f-b89a-ede07ac90959/video-generation-6dc52547-1781772719485.webp",
      badge: "New"
    },
    {
      title: "Music Generation",
      description: "Music generation is available to experiment with and build creative content. Compose original tracks for any project.",
      icon: <Music className="w-6 h-6 text-primary" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/db73bc7b-9f86-446f-b89a-ede07ac90959/music-generation-d493938e-1781772719223.webp",
      badge: "Beta"
    },
    {
      title: "Smart Transcription",
      description: "You can transcribe audio to text (and vice versa), making it easier to work with voice and content across platforms.",
      icon: <Mic2 className="w-6 h-6 text-primary" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/db73bc7b-9f86-446f-b89a-ede07ac90959/transcription-service-806f1f83-1781772719066.webp",
      badge: "Enhanced"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/gebeya.webp" alt="Gebeya Logo" className="h-8 w-auto object-contain" />
            <span className="text-xl font-bold tracking-tight">Dala</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">My Projects</a>
            <a href="#feedback" className="text-sm font-medium hover:text-primary transition-colors">Feedback</a>
          </nav>
          <Button size="sm" className="hidden sm:flex">
            Go to Dashboard <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <Badge variant="secondary" className="mb-4 py-1 px-3">
                  <Sparkles className="w-3 h-3 mr-2 inline-block text-primary" />
                  We missed you!
                </Badge>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                  Ready to start creating <span className="text-primary">again?</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  The tools you love have evolved. From video generation to music composition, 
                  your creative journey with Gebeya Dala just got a lot more powerful.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="h-12 px-8 text-base">
                    Explore New Features
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                    View My Projects
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border"
              >
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/db73bc7b-9f86-446f-b89a-ede07ac90959/hero-welcome-back-bab99a8d-1781772719353.webp" 
                  alt="Welcome Back Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>
          </div>
          
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's New in Dala</h2>
              <p className="text-lg text-muted-foreground">
                We've been busy building the tools you asked for. Here are some of the biggest updates.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow border-none bg-background">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <Badge className="absolute top-3 right-3">{feature.badge}</Badge>
                    </div>
                    <CardHeader>
                      <div className="mb-2 p-2 w-fit rounded-lg bg-primary/10">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <Button variant="ghost" className="px-0 text-primary hover:text-primary/80 hover:bg-transparent">
                        Learn more <ChevronRight className="ml-1 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Reminder */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
              <div className="flex-1 z-10">
                <div className="flex items-center gap-2 mb-6">
                  <FolderHeart className="w-8 h-8" />
                  <span className="text-lg font-medium opacity-90">Your Creative Workspace</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Your previous projects are still there, right where you left them.
                </h2>
                <p className="text-lg md:text-xl opacity-80 mb-8 max-w-xl leading-relaxed">
                  Don't worry about starting from scratch. All your work is safely stored 
                  and ready for you to pick up exactly where you paused.
                </p>
                <Button variant="secondary" size="lg" className="h-12 px-8 text-base">
                  Resume My Work
                </Button>
              </div>
              
              <div className="hidden lg:block flex-1 relative h-64 w-full">
                <div className="absolute top-0 right-0 grid grid-cols-2 gap-4 w-full h-full opacity-20">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="bg-white rounded-xl h-32 w-full" />
                   ))}
                </div>
                <motion.div 
                  initial={{ rotate: -5, y: 20 }}
                  whileInView={{ rotate: 0, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-white/20 animate-pulse" />
                      <div className="space-y-2">
                        <div className="w-32 h-4 rounded-full bg-white/20 animate-pulse" />
                        <div className="w-24 h-3 rounded-full bg-white/20 animate-pulse" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="w-full h-2 rounded-full bg-white/20" />
                      <div className="w-full h-2 rounded-full bg-white/20" />
                      <div className="w-3/4 h-2 rounded-full bg-white/20" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section id="feedback" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-background rounded-3xl shadow-xl border overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-primary/5 flex flex-col justify-center">
                  <div className="mb-6 inline-flex p-3 rounded-full bg-primary/10 w-fit">
                    <MessageSquareQuote className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">We'd love to know</h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    If you're thinking about coming back, we want to make it as smooth as possible.
                  </p>
                  <p className="font-medium text-foreground italic">
                    "What would make it easier for you to get started again?"
                  </p>
                </div>
                <div className="p-8 md:p-12">
                  <FeedbackForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <img src="/gebeya.webp" alt="Gebeya Logo" className="h-6 w-auto object-contain opacity-70" />
              <span className="font-semibold text-muted-foreground">Gebeya Dala</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground font-medium">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground opacity-60">
            © {new Date().getFullYear()} Gebeya Dala. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
