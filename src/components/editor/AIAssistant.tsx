
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookText, MessageSquare, CheckCircle, X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const AIAssistant = () => {
  const [prompt, setPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I can help you with writing suggestions, grammar checks, or generating content ideas for your eBook. What would you like help with today?' },
  ]);

  const examplePrompts = [
    "Help me write an introduction for my book about organic gardening.",
    "Generate chapter title ideas for a mystery novel.",
    "Check the grammar in this paragraph: The dog run down the street and barks loudly.",
    "Suggest a compelling conclusion for my travel memoir.",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    // Add user message
    setMessages([...messages, { role: 'user', content: prompt }]);
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Clear input
    setPrompt('');
    
    // Simulate AI response after a delay
    setTimeout(() => {
      let response = '';
      
      // Very simple response logic based on prompt content
      if (prompt.toLowerCase().includes('introduction') || prompt.toLowerCase().includes('intro')) {
        response = "Here's a draft introduction for your eBook:\n\nIn a world where information comes at us from every angle, this guide offers a focused path through the noise. Within these pages, you'll discover not just theories but practical wisdom that can transform your approach. Whether you're a beginner taking your first steps or an experienced practitioner looking to refine your skills, the journey ahead promises valuable insights and actionable strategies.";
      } else if (prompt.toLowerCase().includes('chapter') && prompt.toLowerCase().includes('title')) {
        response = "Here are some chapter title ideas:\n\n1. The Hidden Pattern\n2. Beneath the Surface\n3. Unexpected Revelations\n4. The Turning Point\n5. Silent Witnesses\n6. Beyond the Shadows\n7. The Final Piece";
      } else if (prompt.toLowerCase().includes('grammar')) {
        response = "I found a grammar issue in your text. The correct version would be: \"The dog ran down the street and barked loudly.\" I changed 'run' to 'ran' and 'barks' to 'barked' to maintain consistent past tense.";
      } else if (prompt.toLowerCase().includes('conclusion')) {
        response = "Here's a suggested conclusion for your travel memoir:\n\nAs the plane lifted off, carrying me away from the landscapes that had become a second home, I realized that the true journey wasn't marked on any map. The coordinates of transformation exist in the spaces between destinations—in conversations with strangers who became friends, in moments of both challenge and wonder, and in the quiet revelations that come only when we step beyond the familiar. Though my footprints may fade from those distant shores, the path they created within me remains, ever leading toward new horizons both external and internal.";
      } else {
        response = "I understand you're looking for assistance with your writing. Could you provide more specific details about what you'd like help with? I can help with introductions, chapter ideas, grammar checks, or generating content for specific sections of your eBook.";
      }
      
      setMessages([...messages, { role: 'user', content: prompt }, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="border border-border bg-white rounded-md overflow-hidden flex flex-col h-[400px]">
      <div className="p-3 bg-ebook-purple text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookText className="h-5 w-5" />
          <h3 className="font-medium">AI Writing Assistant</h3>
        </div>
      </div>
      
      <ScrollArea className="flex-grow p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-ebook-purple text-white'
                    : 'bg-muted'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-ebook-purple/60 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-ebook-purple/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-ebook-purple/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      <div className="p-3 border-t border-border">
        <div className="mb-3">
          <p className="text-sm text-muted-foreground mb-2">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {examplePrompts.map((examplePrompt, index) => (
              <button
                key={index}
                className="text-xs bg-secondary text-ebook-purple rounded-full px-3 py-1 hover:bg-secondary/80 transition-colors"
                onClick={() => setPrompt(examplePrompt)}
              >
                {examplePrompt.length > 30 ? examplePrompt.substring(0, 30) + '...' : examplePrompt}
              </button>
            ))}
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask the AI assistant..."
            disabled={isTyping}
          />
          <Button type="submit" variant="default" disabled={!prompt.trim() || isTyping}>
            <MessageSquare className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;
