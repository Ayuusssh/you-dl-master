import { Download, Music, Video, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadFormat {
  quality: string;
  format: string;
  fileSize: string;
  type: 'video' | 'audio';
}

interface DownloadOptionsProps {
  formats: DownloadFormat[];
  isLoading: boolean;
  onDownload: (format: DownloadFormat) => void;
}

const DownloadOptions = ({ formats, isLoading, onDownload }: DownloadOptionsProps) => {
  const videoFormats = formats.filter(f => f.type === 'video');
  const audioFormats = formats.filter(f => f.type === 'audio');

  if (formats.length === 0 && !isLoading) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-card rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Download className="w-5 h-5 text-primary" />
          Download Options
        </h3>

        {isLoading ? (
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-muted rounded"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-24"></div>
                    <div className="h-3 bg-muted rounded w-16"></div>
                  </div>
                </div>
                <div className="h-10 bg-muted rounded w-24"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Video Downloads */}
            {videoFormats.length > 0 && (
              <div>
                <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Video className="w-4 h-4 text-youtube-red" />
                  Video Downloads
                </h4>
                <div className="grid gap-3">
                  {videoFormats.map((format, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-youtube-border transition-colors duration-200 hover-lift"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-youtube-red-light rounded-lg flex items-center justify-center">
                          <Video className="w-5 h-5 text-youtube-red" />
                        </div>
                        <div>
                          <div className="font-medium text-card-foreground">
                            {format.quality} - {format.format.toUpperCase()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            File size: {format.fileSize}
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={() => onDownload(format)}
                        className="btn-youtube hover-glow"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Audio Downloads */}
            {audioFormats.length > 0 && (
              <div>
                <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Music className="w-4 h-4 text-youtube-red" />
                  Audio Downloads
                </h4>
                <div className="grid gap-3">
                  {audioFormats.map((format, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-youtube-border transition-colors duration-200 hover-lift"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-youtube-red-light rounded-lg flex items-center justify-center">
                          <Music className="w-5 h-5 text-youtube-red" />
                        </div>
                        <div>
                          <div className="font-medium text-card-foreground">
                            {format.quality} - {format.format.toUpperCase()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            File size: {format.fileSize}
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={() => onDownload(format)}
                        className="btn-youtube hover-glow"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadOptions;