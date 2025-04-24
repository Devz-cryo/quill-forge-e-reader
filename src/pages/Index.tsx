
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { BookOpen, Edit, Download, Share, BookText, PenLine } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-ebook-soft-gray to-white py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground">
                Create Beautiful <span className="text-ebook-purple">eBooks</span> With Ease
              </h1>
              <p className="text-lg md:text-xl text-foreground/80">
                Design, write and publish professional eBooks in minutes with our intuitive platform.
                No design experience needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-ebook-purple hover:bg-ebook-dark-purple text-white rounded-md">
                  <Link to="/editor">Start Creating</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-ebook-purple text-ebook-purple hover:bg-ebook-light-purple/20">
                  <Link to="/templates">Browse Templates</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-ebook-light-purple rounded-full opacity-50 animate-float"></div>
              <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-ebook-purple rounded-full opacity-30 animate-float animation-delay-1000"></div>
              
              <div className="relative z-10 bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
                <div className="h-8 bg-ebook-soft-gray flex items-center px-4 border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="eBook Editor Preview" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Everything You Need To Create Professional eBooks</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Our platform gives you all the tools you need to write, design, and publish your eBook without any technical hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Edit className="w-10 h-10 text-ebook-purple" />}
              title="Intuitive Editor"
              description="Our easy-to-use editor makes writing and formatting your eBook a breeze. Just focus on your content and we'll handle the rest."
            />
            <FeatureCard 
              icon={<BookOpen className="w-10 h-10 text-ebook-purple" />}
              title="Beautiful Templates"
              description="Choose from dozens of professionally designed templates to give your eBook the perfect look and feel."
            />
            <FeatureCard 
              icon={<Download className="w-10 h-10 text-ebook-purple" />}
              title="Multiple Formats"
              description="Export your eBook in PDF, EPUB, and MOBI formats to ensure compatibility with all reading devices."
            />
            <FeatureCard 
              icon={<Share className="w-10 h-10 text-ebook-purple" />}
              title="Easy Publishing"
              description="Publish directly to popular platforms or share your eBook with your audience in just a few clicks."
            />
            <FeatureCard 
              icon={<BookText className="w-10 h-10 text-ebook-purple" />}
              title="Chapter Management"
              description="Organize your content with our intuitive chapter management system for a well-structured eBook."
            />
            <FeatureCard 
              icon={<PenLine className="w-10 h-10 text-ebook-purple" />}
              title="AI Writing Assistant"
              description="Get content suggestions, grammar checks, and writing tips from our built-in AI assistant."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-ebook-purple to-ebook-dark-purple text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Create Your eBook?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join thousands of authors who have created and published their eBooks using QuillForge.
            </p>
            <Button asChild size="lg" className="bg-white text-ebook-purple hover:bg-ebook-soft-gray">
              <Link to="/editor">Start Creating Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ebook-dark-gray text-white/70 py-12 mt-auto">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <Link to="/" className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-ebook-light-purple" />
                <span className="text-xl font-semibold text-white">QuillForge</span>
              </Link>
              <p className="mt-4 max-w-xs">
                The easiest way to create professional eBooks online.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="font-medium text-white text-lg">Product</h3>
                <ul className="space-y-2">
                  <li><Link to="/editor" className="hover:text-white transition-colors">Editor</Link></li>
                  <li><Link to="/templates" className="hover:text-white transition-colors">Templates</Link></li>
                  <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-white text-lg">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link to="/tutorials" className="hover:text-white transition-colors">Tutorials</Link></li>
                  <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-white text-lg">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-white/10 text-center md:text-left">
            <p>© {new Date().getFullYear()} QuillForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-ebook-soft-gray rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export default Index;
