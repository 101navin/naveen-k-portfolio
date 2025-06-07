
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

const Resume = ({ isOpen, onClose }: ResumeProps) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/fa400c14-183f-4d9f-92e1-3131b3774c4d.png';
    link.download = 'Naveen_K_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Resume - Naveen K</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Download
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
            >
              <X size={20} />
            </Button>
          </div>
        </div>
        <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
          <img
            src="/lovable-uploads/fa400c14-183f-4d9f-92e1-3131b3774c4d.png"
            alt="Naveen K Resume"
            className="w-full h-auto mx-auto shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
