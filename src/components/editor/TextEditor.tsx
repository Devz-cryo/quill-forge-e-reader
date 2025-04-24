
import React, { useState } from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TextEditor = () => {
  const [content, setContent] = useState<string>('');
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const formatText = (command: string) => {
    document.execCommand(command, false);
  };

  return (
    <div className="editor-container">
      <div className="bg-ebook-soft-gray p-2 rounded-t-md border-b border-border flex flex-wrap gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => formatText('bold')}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => formatText('italic')}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => formatText('underline')}
          title="Underline"
        >
          <Underline className="h-4 w-4" />
        </Button>
        <div className="w-px h-8 bg-border mx-1"></div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => formatText('justifyLeft')}
          title="Align Left"
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => formatText('justifyCenter')}
          title="Align Center"
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => formatText('justifyRight')}
          title="Align Right"
        >
          <AlignRight className="h-4 w-4" />
        </Button>
        <div className="w-px h-8 bg-border mx-1"></div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => formatText('insertUnorderedList')}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => formatText('insertOrderedList')}
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="visual" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="visual">Visual Editor</TabsTrigger>
          <TabsTrigger value="markdown">Markdown</TabsTrigger>
        </TabsList>
        <TabsContent value="visual" className="border-x border-b rounded-b-md">
          <div
            className="p-4 min-h-[400px] outline-none font-serif"
            contentEditable
            dangerouslySetInnerHTML={{ __html: content }}
            onBlur={(e) => setContent(e.currentTarget.innerHTML)}
          ></div>
        </TabsContent>
        <TabsContent value="markdown" className="border-x border-b rounded-b-md">
          <textarea
            value={content}
            onChange={handleContentChange}
            className="w-full p-4 min-h-[400px] font-mono text-sm outline-none resize-none"
            placeholder="Write your content here in markdown..."
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TextEditor;
