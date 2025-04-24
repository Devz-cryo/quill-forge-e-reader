
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, ChevronUp, ChevronDown, Plus, Trash2, Edit } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Chapter {
  id: string;
  title: string;
  content: string;
  order: number;
}

interface ChapterManagerProps {
  onChapterSelect: (chapterId: string) => void;
}

const ChapterManager: React.FC<ChapterManagerProps> = ({ onChapterSelect }) => {
  const [chapters, setChapters] = useState<Chapter[]>([
    {
      id: '1',
      title: 'Introduction',
      content: 'This is the introduction to your book.',
      order: 0,
    },
    {
      id: '2',
      title: 'Chapter 1',
      content: 'This is the first chapter of your book.',
      order: 1,
    },
  ]);

  const [newChapterTitle, setNewChapterTitle] = useState('');
  const [editingChapter, setEditingChapter] = useState<string | null>(null);

  const addChapter = () => {
    if (!newChapterTitle.trim()) return;
    
    const newChapter: Chapter = {
      id: Date.now().toString(),
      title: newChapterTitle,
      content: '',
      order: chapters.length,
    };

    setChapters([...chapters, newChapter]);
    setNewChapterTitle('');
  };

  const deleteChapter = (id: string) => {
    setChapters(chapters.filter(chapter => chapter.id !== id));
  };

  const moveChapter = (id: string, direction: 'up' | 'down') => {
    const index = chapters.findIndex(chapter => chapter.id === id);
    if (index === -1) return;

    if (direction === 'up' && index > 0) {
      const newChapters = [...chapters];
      [newChapters[index - 1], newChapters[index]] = [newChapters[index], newChapters[index - 1]];
      
      // Update order property
      newChapters[index - 1].order = index - 1;
      newChapters[index].order = index;
      
      setChapters(newChapters);
    } else if (direction === 'down' && index < chapters.length - 1) {
      const newChapters = [...chapters];
      [newChapters[index], newChapters[index + 1]] = [newChapters[index + 1], newChapters[index]];
      
      // Update order property
      newChapters[index].order = index;
      newChapters[index + 1].order = index + 1;
      
      setChapters(newChapters);
    }
  };

  const updateChapterTitle = (id: string, newTitle: string) => {
    setChapters(
      chapters.map(chapter => 
        chapter.id === id ? { ...chapter, title: newTitle } : chapter
      )
    );
  };

  return (
    <div className="border border-border rounded-md bg-white">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-medium mb-4">Chapters</h3>
        
        <ScrollArea className="h-[300px] pr-4">
          <ul className="space-y-2">
            {chapters.map((chapter) => (
              <li 
                key={chapter.id}
                className="flex items-center p-2 rounded-md hover:bg-muted group"
              >
                <button 
                  className="flex-grow text-left flex items-center gap-2"
                  onClick={() => onChapterSelect(chapter.id)}
                >
                  <BookOpen className="h-4 w-4 text-ebook-purple" />
                  {editingChapter === chapter.id ? (
                    <Input
                      value={chapter.title}
                      onChange={(e) => updateChapterTitle(chapter.id, e.target.value)}
                      onBlur={() => setEditingChapter(null)}
                      autoFocus
                      className="h-7 py-1"
                    />
                  ) : (
                    <span>{chapter.title}</span>
                  )}
                </button>
                
                <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7"
                    onClick={() => moveChapter(chapter.id, 'up')}
                    disabled={chapter.order === 0}
                  >
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7"
                    onClick={() => moveChapter(chapter.id, 'down')}
                    disabled={chapter.order === chapters.length - 1}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7"
                    onClick={() => setEditingChapter(chapter.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7 text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={() => deleteChapter(chapter.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>

      <div className="p-4 bg-muted/50">
        <div className="flex gap-2">
          <Input
            placeholder="New chapter title..."
            value={newChapterTitle}
            onChange={(e) => setNewChapterTitle(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') addChapter();
            }}
          />
          <Button onClick={addChapter} className="gap-1">
            <Plus className="h-4 w-4" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChapterManager;
