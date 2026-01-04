
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AiLab: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [status, setStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVideo = async () => {
    if (!image) return;

    try {
      // Check for API key as per Veo requirements
      if (!(await window.aistudio.hasSelectedApiKey())) {
        await window.aistudio.openSelectKey();
        // Proceeding as per guideline: assume success after trigger
      }

      setIsGenerating(true);
      setVideoUrl(null);
      setStatus('Starting your cinematic animation...');

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = image.split(',')[1];
      const mimeType = image.split(';')[0].split(':')[1];

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'Animate this industrial component with cinematic lighting and motion',
        image: {
          imageBytes: base64Data,
          mimeType: mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });

      const loadingMessages = [
        "Analyzing part geometry...",
        "Simulating industrial motion...",
        "Rendering cinematic textures...",
        "Polishing high-tech visuals...",
        "Finalizing your video..."
      ];
      let msgIndex = 0;

      while (!operation.done) {
        setStatus(loadingMessages[msgIndex % loadingMessages.length]);
        msgIndex++;
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        setVideoUrl(URL.createObjectURL(blob));
        setStatus('Generation complete!');
      } else {
        throw new Error("No video link returned.");
      }

    } catch (error: any) {
      console.error("Video Generation Error:", error);
      setStatus('Error generating video. Please ensure you have a valid paid API key selected.');
      if (error.message?.includes("Requested entity was not found")) {
        await window.aistudio.openSelectKey();
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 md:py-20 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            AI Research Lab
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display text-slate-900 dark:text-white mb-4">
            Animate Industrial Vision
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Leverage Google's Veo technology to transform static part photos into high-fidelity cinematic videos. Perfect for marketing, training, or product visualization.
          </p>
          <p className="mt-4 text-xs text-primary font-medium">
            <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Requires a paid API key from a billing-enabled GCP project.
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 space-y-8">
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                1. Upload Photo
              </label>
              <div className="relative group cursor-pointer">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center transition-all ${
                  image ? 'border-primary/50 bg-primary/5' : 'border-slate-300 dark:border-slate-700 group-hover:border-primary/50'
                }`}>
                  {image ? (
                    <img src={image} alt="Uploaded" className="w-full h-48 object-contain rounded-lg" />
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary mb-2 transition-colors">upload_file</span>
                      <p className="text-slate-500 text-sm">Click or drag to upload part photo</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                2. Motion Instructions (Optional)
              </label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., The camera pans slowly around the engine block showing internal details..."
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary dark:text-white"
                rows={3}
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                3. Video Settings
              </label>
              <div className="flex gap-4">
                {(['16:9', '9:16'] as const).map(ratio => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`flex-1 py-3 rounded-xl border font-bold text-sm transition-all ${
                      aspectRatio === ratio 
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                        : 'border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-primary/30'
                    }`}
                  >
                    {ratio === '16:9' ? 'Landscape (16:9)' : 'Portrait (9:16)'}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={generateVideo}
              disabled={!image || isGenerating}
              className="w-full py-4 rounded-xl bg-primary hover:bg-secondary text-white font-bold text-lg shadow-xl shadow-primary/20 transition-all disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Generating...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">movie</span>
                  Generate AI Video
                </>
              )}
            </button>
          </div>

          {/* Results */}
          <div className="bg-slate-900 rounded-3xl overflow-hidden min-h-[500px] flex flex-col items-center justify-center p-8 relative shadow-2xl border border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50"></div>
            
            {videoUrl ? (
              <div className="relative z-10 w-full animate-in zoom-in duration-700">
                <video src={videoUrl} controls autoPlay loop className="w-full rounded-2xl shadow-2xl border border-white/10" />
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-green-400 text-sm font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Video Ready
                  </span>
                  <a 
                    href={videoUrl} 
                    download={`blackbuck-ai-video-${Date.now()}.mp4`}
                    className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-bold transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">download</span>
                    Download MP4
                  </a>
                </div>
              </div>
            ) : isGenerating ? (
              <div className="relative z-10 text-center space-y-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto relative">
                  <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <span className="material-symbols-outlined text-4xl text-primary animate-pulse">movie</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{status}</h3>
                  <p className="text-slate-400 text-sm">This can take up to 2-3 minutes. Don't close this tab.</p>
                </div>
                <div className="w-48 h-1 bg-slate-800 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-primary animate-[shimmer_2s_infinite] w-full"></div>
                </div>
              </div>
            ) : (
              <div className="relative z-10 text-center space-y-4">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
                  <span className="material-symbols-outlined text-4xl text-slate-500">video_library</span>
                </div>
                <h3 className="text-xl font-bold text-white">Preview Window</h3>
                <p className="text-slate-500 text-sm max-w-xs">Upload an industrial part photo and click generate to see the AI magic.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiLab;
