import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import VideoPreview from "@/components/VideoPreview";
import DownloadOptions from "@/components/DownloadOptions";

interface VideoData {
  title: string;
  thumbnail: string;
  duration: string;
  uploader: string;
  views: string;
  uploadDate: string;
}

interface DownloadFormat {
  quality: string;
  format: string;
  fileSize: string;
  type: 'video' | 'audio';
}

const Index = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [downloadFormats, setDownloadFormats] = useState<DownloadFormat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormatsLoading, setIsFormatsLoading] = useState(false);

  const handleSearch = async () => {
    if (!videoUrl.trim()) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid YouTube video URL",
        variant: "destructive"
      });
      return;
    }

    // Basic YouTube URL validation
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+/;
    if (!youtubeRegex.test(videoUrl)) {
      toast({
        title: "Invalid YouTube URL",
        description: "Please enter a valid YouTube video URL",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setVideoData(null);
    setDownloadFormats([]);

    try {
      // Simulate API call to fetch video data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock video data (replace with actual API call)
      const mockVideoData: VideoData = {
        title: "How to Build Amazing Web Applications with React and TypeScript",
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        duration: "15:42",
        uploader: "Tech Tutorial Channel",
        views: "1,234,567",
        uploadDate: "2 days ago"
      };

      setVideoData(mockVideoData);
      
      // Fetch download formats
      setIsFormatsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockFormats: DownloadFormat[] = [
        { quality: "1080p", format: "mp4", fileSize: "125 MB", type: "video" },
        { quality: "720p", format: "mp4", fileSize: "78 MB", type: "video" },
        { quality: "480p", format: "mp4", fileSize: "45 MB", type: "video" },
        { quality: "360p", format: "mp4", fileSize: "28 MB", type: "video" },
        { quality: "720p", format: "webm", fileSize: "65 MB", type: "video" },
        { quality: "480p", format: "webm", fileSize: "38 MB", type: "video" },
        { quality: "High Quality", format: "mp3", fileSize: "15 MB", type: "audio" },
        { quality: "Medium Quality", format: "mp3", fileSize: "8 MB", type: "audio" }
      ];

      setDownloadFormats(mockFormats);
      setIsFormatsLoading(false);

      toast({
        title: "Video Found!",
        description: "Video details loaded successfully"
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch video information",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (format: DownloadFormat) => {
    // In a real implementation, this would trigger the actual download
    toast({
      title: "Download Started",
      description: `Downloading ${format.quality} ${format.format.toUpperCase()} (${format.fileSize})`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-youtube-light-grey">
      <Header
        videoUrl={videoUrl}
        onUrlChange={setVideoUrl}
        onSearch={handleSearch}
        isLoading={isLoading}
      />
      
      <main>
        <VideoPreview 
          videoData={videoData} 
          isLoading={isLoading} 
        />
        
        <DownloadOptions
          formats={downloadFormats}
          isLoading={isFormatsLoading}
          onDownload={handleDownload}
        />
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p className="mb-2">© 2024 VideoDownloader. Built with React & TypeScript.</p>
          <p className="text-sm">Please respect content creators' rights and YouTube's terms of service.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
