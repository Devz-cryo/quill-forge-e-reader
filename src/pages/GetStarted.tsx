
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { BookOpen, FileText, Edit, Rocket, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GetStarted = () => {
  const [selectedGenre, setSelectedGenre] = useState('');

  const genres = [
    { name: 'Fiction', description: 'Novels, short stories, and creative narratives' },
    { name: 'Non-Fiction', description: 'Guides, memoirs, and informative books' },
    { name: 'Academic', description: 'Research papers, textbooks, and scholarly works' },
    { name: 'Children', description: 'Picture books, young adult novels, and educational content' },
    { name: 'Poetry', description: 'Verse, collections, and experimental writing' },
    { name: 'Business', description: 'Professional guides, case studies, and industry insights' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-ebook-soft-gray to-white">
      <Navbar />
      
      <div className="container mx-auto py-16 px-4 flex-grow">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to Your eBook Journey</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start creating your masterpiece with QuillForge. Choose a genre, select a template, and begin writing!
            </p>
          </section>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Choose Your Genre</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {genres.map((genre) => (
                <div 
                  key={genre.name}
                  onClick={() => setSelectedGenre(genre.name)}
                  className={`
                    border rounded-lg p-6 text-center cursor-pointer transition-all
                    ${selectedGenre === genre.name 
                      ? 'border-ebook-purple bg-ebook-light-purple/10 shadow-md' 
                      : 'border-border hover:border-ebook-purple/50 hover:bg-ebook-soft-gray'}
                  `}
                >
                  <BookOpen className={`
                    mx-auto h-12 w-12 mb-4 
                    ${selectedGenre === genre.name ? 'text-ebook-purple' : 'text-muted-foreground'}
                  `} />
                  <h3 className="text-xl font-semibold mb-2">{genre.name}</h3>
                  <p className="text-muted-foreground text-sm">{genre.description}</p>
                </div>
              ))}
            </div>
          </div>

          {selectedGenre && (
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Next Steps</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <FileText className="h-12 w-12 text-ebook-purple mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Select Template</h3>
                  <p className="text-muted-foreground mb-4">Choose a professional template for your {selectedGenre} eBook</p>
                  <Button asChild variant="outline" className="border-ebook-purple text-ebook-purple">
                    <Link to="/templates">Browse Templates</Link>
                  </Button>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Edit className="h-12 w-12 text-ebook-purple mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Start Writing</h3>
                  <p className="text-muted-foreground mb-4">Begin crafting your eBook with our intuitive editor</p>
                  <Button asChild className="bg-ebook-purple hover:bg-ebook-dark-purple">
                    <Link to="/editor">Open Editor</Link>
                  </Button>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Rocket className="h-12 w-12 text-ebook-purple mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Publish</h3>
                  <p className="text-muted-foreground mb-4">Share your eBook with the world when you're ready</p>
                  <Button variant="secondary">Learn About Publishing</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
