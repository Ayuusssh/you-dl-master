import { Clock, User, Eye } from "lucide-react";

interface VideoData {
  title: string;
  thumbnail: string;
  duration: string;
  uploader: string;
  views: string;
  uploadDate: string;
}

interface VideoPreviewProps {
  videoData: VideoData | null;
  isLoading: boolean;
}

const VideoPreview = ({ videoData, isLoading }: VideoPreviewProps) => {
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-card rounded-lg shadow-md p-6 animate-pulse">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-80 h-45 bg-muted rounded-lg"></div>
            <div className="flex-1 space-y-4">
              <div className="h-6 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded w-1/4"></div>
                <div className="h-3 bg-muted rounded w-1/3"></div>
                <div className="h-3 bg-muted rounded w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!videoData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="text-muted-foreground">
          <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <h2 className="text-xl font-medium mb-2">Ready to Download</h2>
          <p>Paste a YouTube video URL above to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-80 relative">
            <img
              src={videoData.thumbnail}
              alt={videoData.title}
              className="w-full h-45 object-cover rounded-lg"
            />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm font-medium">
              {videoData.duration}
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-card-foreground mb-4 leading-tight">
              {videoData.title}
            </h2>
            
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-medium">{videoData.uploader}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{videoData.views} views</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Uploaded {videoData.uploadDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Missing import fix
import { Search } from "lucide-react";

export default VideoPreview;