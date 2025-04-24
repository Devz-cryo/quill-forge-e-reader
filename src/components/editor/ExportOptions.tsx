
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, File, FileText } from 'lucide-react';

const ExportOptions = () => {
  const [format, setFormat] = useState('pdf');
  const [includeTableOfContents, setIncludeTableOfContents] = useState(true);
  const [includePageNumbers, setIncludePageNumbers] = useState(true);
  const [highResImages, setHighResImages] = useState(true);

  const handleExport = () => {
    // In a real implementation, this would trigger the export process
    console.log('Exporting with settings:', {
      format,
      includeTableOfContents,
      includePageNumbers,
      highResImages
    });

    // Simulate export process
    setTimeout(() => {
      alert(`Your eBook has been exported as ${format.toUpperCase()}!`);
    }, 1500);
  };

  return (
    <div className="border border-border rounded-md bg-white p-5">
      <h3 className="text-lg font-medium mb-4">Export Options</h3>
      
      <div className="space-y-6">
        <div>
          <Label className="text-base">Format</Label>
          <RadioGroup value={format} onValueChange={setFormat} className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pdf" id="pdf" />
              <Label htmlFor="pdf" className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-ebook-purple" />
                PDF <span className="text-xs text-muted-foreground">(Recommended)</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="epub" id="epub" />
              <Label htmlFor="epub" className="flex items-center gap-2">
                <File className="h-4 w-4 text-ebook-purple" />
                EPUB <span className="text-xs text-muted-foreground">(Coming soon)</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mobi" id="mobi" disabled />
              <Label htmlFor="mobi" className="flex items-center gap-2 text-muted-foreground">
                <File className="h-4 w-4" />
                MOBI <span className="text-xs">(Coming soon)</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="toc" className="cursor-pointer">Table of Contents</Label>
            <Switch 
              id="toc" 
              checked={includeTableOfContents} 
              onCheckedChange={setIncludeTableOfContents}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="page-numbers" className="cursor-pointer">Page Numbers</Label>
            <Switch 
              id="page-numbers" 
              checked={includePageNumbers} 
              onCheckedChange={setIncludePageNumbers}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="high-res" className="cursor-pointer">High Resolution Images</Label>
            <Switch 
              id="high-res" 
              checked={highResImages} 
              onCheckedChange={setHighResImages}
            />
          </div>
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full mt-6 gap-2">
            <Download className="h-4 w-4" /> Export eBook
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export Settings</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Format: <span className="font-medium">{format.toUpperCase()}</span></Label>
              <div className="text-sm text-muted-foreground">
                Your eBook will be exported as a {format === 'pdf' ? 'PDF document' : format === 'epub' ? 'EPUB file' : 'MOBI file'}.
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Settings</Label>
              <ul className="text-sm list-disc pl-5 space-y-1">
                {includeTableOfContents && <li>Include table of contents</li>}
                {includePageNumbers && <li>Include page numbers</li>}
                {highResImages && <li>Use high resolution images</li>}
              </ul>
            </div>
          </div>
          <Button onClick={handleExport} className="gap-2">
            <Download className="h-4 w-4" /> Confirm Export
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExportOptions;
