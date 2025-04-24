
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import TextEditor from '@/components/editor/TextEditor';
import CoverDesigner from '@/components/editor/CoverDesigner';
import ChapterManager from '@/components/editor/ChapterManager';
import Preview from '@/components/editor/Preview';
import ExportOptions from '@/components/editor/ExportOptions';
import AIAssistant from '@/components/editor/AIAssistant';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Save, BookOpen, BookText, Image, FileText, Download } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useToast } from '@/hooks/use-toast';

const Editor = () => {
  const [activeTab, setActiveTab] = useState('write');
  const [bookTitle, setBookTitle] = useState('My New Book');
  const [bookContent, setBookContent] = useState('<p>Start writing your amazing book here...</p>');
  const [isPreviewFullScreen, setIsPreviewFullScreen] = useState(false);
  const { toast } = useToast();

  const handleChapterSelect = (chapterId: string) => {
    // In a real app, this would load the selected chapter content
    toast({
      title: "Chapter Selected",
      description: `Loading chapter with ID: ${chapterId}`,
    });
  };

  const handleSave = () => {
    // In a real app, this would save the current state of the book
    toast({
      title: "Progress Saved",
      description: "Your book has been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-ebook-soft-gray">
      <Navbar />
      
      <div className="flex-grow container mx-auto py-6 px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold">{bookTitle}</h1>
          
          <Button onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            <span className="hidden sm:inline">Save Progress</span>
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            <TabsTrigger value="write" className="gap-2">
              <BookText className="h-4 w-4" />
              <span className="hidden sm:inline">Write</span>
            </TabsTrigger>
            <TabsTrigger value="cover" className="gap-2">
              <Image className="h-4 w-4" />
              <span className="hidden sm:inline">Cover</span>
            </TabsTrigger>
            <TabsTrigger value="preview" className="gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Preview</span>
            </TabsTrigger>
            <TabsTrigger value="export" className="gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">AI Assistant</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="write" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <ChapterManager onChapterSelect={handleChapterSelect} />
              </div>
              <div className="md:col-span-3">
                <TextEditor />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cover">
            <CoverDesigner />
          </TabsContent>
          
          <TabsContent value="preview">
            <Preview 
              title={bookTitle}
              content={bookContent}
              fullScreen={isPreviewFullScreen}
              onToggleFullScreen={() => setIsPreviewFullScreen(!isPreviewFullScreen)}
            />
          </TabsContent>
          
          <TabsContent value="export" className="max-w-md mx-auto">
            <ExportOptions />
          </TabsContent>
          
          <TabsContent value="ai" className="max-w-2xl mx-auto">
            <AIAssistant />
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-white border-t border-border py-4">
        <div className="container mx-auto px-4 text-sm text-center text-muted-foreground">
          © 2025 QuillForge eBook Maker. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Editor;
