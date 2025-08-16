import { Search } from "lucide-react";

interface HeaderProps {
  videoUrl: string;
  onUrlChange: (url: string) => void;
  onSearch: () => void;
  isLoading: boolean;
}

const Header = ({ videoUrl, onUrlChange, onSearch, isLoading }: HeaderProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">YT</span>
            </div>
            <h1 className="text-2xl font-semibold text-foreground">VideoDownloader</h1>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="search-container">
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => onUrlChange(e.target.value)}
            placeholder="Paste YouTube video URL here..."
            className="input-youtube flex-1"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !videoUrl.trim()}
            className="absolute right-0 top-0 h-full px-6 bg-muted hover:bg-accent rounded-r-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Search className="w-5 h-5 text-muted-foreground" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;