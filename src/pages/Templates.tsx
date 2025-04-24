
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BookOpen, BookText, BookMarked } from 'lucide-react';

const Templates = () => {
  const templates = [
    {
      id: 'novel',
      title: 'Novel',
      description: 'Standard format for fiction novels with chapters.',
      icon: <BookOpen className="h-8 w-8 text-ebook-purple" />,
    },
    {
      id: 'nonfiction',
      title: 'Non-Fiction',
      description: 'Optimized for instructional and educational content.',
      icon: <BookText className="h-8 w-8 text-ebook-purple" />,
    },
    {
      id: 'academic',
      title: 'Academic',
      description: 'Citations, footnotes, and formatting for scholarly works.',
      icon: <FileText className="h-8 w-8 text-ebook-purple" />,
    },
    {
      id: 'children',
      title: 'Children\'s Book',
      description: 'Illustrative layout with larger text and image focus.',
      icon: <BookMarked className="h-8 w-8 text-ebook-purple" />,
    },
    {
      id: 'poetry',
      title: 'Poetry',
      description: 'Special formatting for verse and poetic structures.',
      icon: <BookText className="h-8 w-8 text-ebook-purple" />,
    },
    {
      id: 'cookbook',
      title: 'Cookbook',
      description: 'Recipe format with ingredients lists and step-by-step instructions.',
      icon: <BookOpen className="h-8 w-8 text-ebook-purple" />,
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-ebook-soft-gray">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4 flex-grow">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Book Templates</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start your book project with professionally designed templates. Choose a template that fits your genre and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-muted/30 flex flex-row items-center gap-4 pb-4">
                {template.icon}
                <CardTitle>{template.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription>{template.description}</CardDescription>
              </CardContent>
              <CardFooter className="border-t bg-muted/20 p-4">
                <Button 
                  asChild 
                  className="w-full bg-ebook-purple hover:bg-ebook-dark-purple"
                >
                  <a href={`/editor?template=${template.id}`}>Use Template</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
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

export default Templates;
