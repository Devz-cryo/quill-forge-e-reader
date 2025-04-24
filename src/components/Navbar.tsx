
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-border py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-ebook-purple" />
          <span className="text-xl font-semibold text-foreground">QuillForge</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-foreground/80 hover:text-ebook-purple transition-colors">
          Home
        </Link>
        <Link to="/editor" className="text-foreground/80 hover:text-ebook-purple transition-colors">
          Editor
        </Link>
        <Link to="/templates" className="text-foreground/80 hover:text-ebook-purple transition-colors">
          Templates
        </Link>
        <Link to="/about" className="text-foreground/80 hover:text-ebook-purple transition-colors">
          About
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Button asChild variant="outline" className="rounded-full h-9 px-4">
          <Link to="/login">Sign In</Link>
        </Button>
        <Button asChild className="rounded-full h-9 px-4 bg-ebook-purple hover:bg-ebook-dark-purple">
          <Link to="/signup">Get Started</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
