
import React from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PreviewProps {
  title: string;
  content: string;
  fullScreen?: boolean;
  onToggleFullScreen?: () => void;
}

const Preview: React.FC<PreviewProps> = ({ 
  title = "Book Title", 
  content = "<p>Preview your book content here...</p>",
  fullScreen = false,
  onToggleFullScreen = () => {}
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5; // This would be calculated based on content

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={`bg-ebook-soft-gray p-6 rounded-md ${fullScreen ? 'fixed inset-0 z-50' : 'relative'}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-ebook-purple" />
          Preview
        </h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleFullScreen}
        >
          {fullScreen ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      <div className="bg-white shadow-lg mx-auto rounded-md overflow-hidden max-w-md">
        <div className="p-4 bg-ebook-purple text-white text-center">
          <h2 className="font-serif text-xl">{title}</h2>
        </div>
        
        <div className="editor-page">
          <div
            className="font-serif text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
        
        <div className="p-3 border-t border-border bg-muted/30 flex justify-between items-center">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Previous
          </Button>
          
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          
          <Button 
            variant="ghost"
            size="sm"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
