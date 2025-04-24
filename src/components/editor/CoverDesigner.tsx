
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { BookOpen, Upload, Image, Plus } from 'lucide-react';

const CoverDesigner = () => {
  const [title, setTitle] = useState('My eBook');
  const [subtitle, setSubtitle] = useState('A compelling subtitle');
  const [author, setAuthor] = useState('Your Name');
  const [coverImage, setCoverImage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#8B5CF6');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [template, setTemplate] = useState('default');

  const templates = [
    { id: 'default', name: 'Minimal', color: '#8B5CF6' },
    { id: 'classic', name: 'Classic', color: '#0EA5E9' },
    { id: 'modern', name: 'Modern', color: '#F97316' },
    { id: 'elegant', name: 'Elegant', color: '#6E59A5' },
    { id: 'bold', name: 'Bold', color: '#D946EF' },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white border border-border rounded-md p-6 space-y-6">
        <h3 className="text-lg font-medium">Cover Design Settings</h3>
        
        <Tabs defaultValue="style">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="style">Style</TabsTrigger>
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="image">Image</TabsTrigger>
          </TabsList>
          
          <TabsContent value="style" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label>Select a template</Label>
              <div className="grid grid-cols-3 gap-3">
                {templates.map((temp) => (
                  <button
                    key={temp.id}
                    className={`aspect-[2/3] rounded-md flex items-center justify-center border-2 transition-all ${
                      template === temp.id 
                        ? 'border-ebook-purple ring-2 ring-ebook-purple ring-opacity-30' 
                        : 'border-border hover:border-ebook-purple/50'
                    }`}
                    style={{ backgroundColor: temp.color }}
                    onClick={() => {
                      setTemplate(temp.id);
                      setBackgroundColor(temp.color);
                    }}
                  >
                    <span className="text-white text-xs">{temp.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Background Color</Label>
              <div className="flex gap-2">
                <Input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-12 h-12 p-1"
                />
                <Input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Text Color</Label>
              <div className="flex gap-2">
                <Input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-12 h-12 p-1"
                />
                <Input
                  type="text"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="text" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="book-title">Book Title</Label>
              <Input
                id="book-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your book title"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="book-subtitle">Subtitle</Label>
              <Input
                id="book-subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Enter a subtitle (optional)"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="book-author">Author</Label>
              <Input
                id="book-author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author name"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="image" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label>Cover Image</Label>
              <div className="grid grid-cols-2 gap-3">
                <div
                  className={`aspect-square rounded-md border-2 border-dashed border-border bg-muted flex flex-col items-center justify-center cursor-pointer hover:border-ebook-purple/50 transition-colors`}
                  onClick={() => document.getElementById('cover-image-upload')?.click()}
                >
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">Upload Image</span>
                  <input
                    type="file"
                    id="cover-image-upload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
                
                <button
                  className="aspect-square rounded-md border-2 border-dashed border-border bg-muted flex flex-col items-center justify-center cursor-pointer hover:border-ebook-purple/50 transition-colors"
                  onClick={() => setCoverImage('')}
                >
                  <Image className="h-8 w-8 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">No Image</span>
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-medium mb-6">Preview</h3>
        <div 
          className="w-64 h-96 rounded-md shadow-lg flex flex-col"
          style={{ backgroundColor: backgroundColor }}
        >
          {coverImage ? (
            <div className="relative w-full h-full">
              <img 
                src={coverImage} 
                alt="Book cover" 
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black/30 rounded-md flex flex-col items-center justify-center p-4 text-center">
                <h1 
                  className="font-serif font-bold text-xl"
                  style={{ color: textColor }}
                >
                  {title}
                </h1>
                {subtitle && (
                  <p 
                    className="font-serif text-sm mt-2"
                    style={{ color: textColor }}
                  >
                    {subtitle}
                  </p>
                )}
                <div className="mt-auto">
                  <p 
                    className="font-serif text-sm"
                    style={{ color: textColor }}
                  >
                    {author}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
              <BookOpen className="w-10 h-10 mb-4" style={{ color: textColor }} />
              <h1 
                className="font-serif font-bold text-xl"
                style={{ color: textColor }}
              >
                {title}
              </h1>
              {subtitle && (
                <p 
                  className="font-serif text-sm mt-2"
                  style={{ color: textColor }}
                >
                  {subtitle}
                </p>
              )}
              <div className="mt-auto">
                <p 
                  className="font-serif text-sm"
                  style={{ color: textColor }}
                >
                  {author}
                </p>
              </div>
            </div>
          )}
        </div>
        
        <Button variant="outline" className="mt-6 gap-2">
          <Plus size={16} /> Add to My Designs
        </Button>
      </div>
    </div>
  );
};

export default CoverDesigner;
