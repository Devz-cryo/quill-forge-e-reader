
import React from 'react';
import Navbar from '@/components/Navbar';
import { BookOpen, Users, HelpCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ebook-soft-gray">
      <Navbar />
      
      <div className="container mx-auto py-16 px-4 flex-grow">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">About QuillForge</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              QuillForge is your all-in-one platform for creating, designing, and publishing professional eBooks with ease.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <BookOpen className="mx-auto h-12 w-12 text-ebook-purple mb-4" />
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p className="text-muted-foreground">
                Empower writers of all levels to bring their stories to life with intuitive tools and professional design.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="mx-auto h-12 w-12 text-ebook-purple mb-4" />
              <h2 className="text-xl font-semibold mb-2">Our Team</h2>
              <p className="text-muted-foreground">
                A passionate group of writers, designers, and tech enthusiasts dedicated to simplifying the eBook creation process.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <HelpCircle className="mx-auto h-12 w-12 text-ebook-purple mb-4" />
              <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
              <p className="text-muted-foreground">
                To democratize publishing by providing powerful, user-friendly tools for digital storytelling.
              </p>
            </div>
          </div>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose QuillForge?</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Intuitive, user-friendly eBook creation interface</li>
              <li>• Professional templates for various genres</li>
              <li>• AI-powered writing assistance</li>
              <li>• Multiple export formats (PDF, EPUB, MOBI)</li>
              <li>• Easy publishing and distribution options</li>
            </ul>
          </section>
        </div>
      </div>

      <footer className="bg-white border-t border-border py-4">
        <div className="container mx-auto px-4 text-sm text-center text-muted-foreground">
          © 2025 QuillForge eBook Maker. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;
