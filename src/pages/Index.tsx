
import { useCallback, useEffect, useState } from "react";
import DictationToggle from "@/components/DictationToggle";
import MicrophoneButton from "@/components/MicrophoneButton";
import FeaturesList from "@/components/FeaturesList";
import SettingsButton from "@/components/SettingsButton";
import { Mic } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const toggleListening = useCallback(() => {
    if (!isListening) {
      // Start listening
      setIsListening(true);
      toast({
        title: "Dictation started",
        description: `Using ${isPaid ? "advanced" : "basic"} mode`,
      });
      // This would be where you'd start the actual speech recognition
    } else {
      // Stop listening
      setIsListening(false);
      toast({
        title: "Dictation stopped",
        description: "Text has been captured",
      });
      // This would be where you'd stop the actual speech recognition
    }
  }, [isListening, isPaid]);

  const handleModeToggle = (newValue: boolean) => {
    setIsPaid(newValue);
    toast({
      title: `Switched to ${newValue ? "Advanced" : "Basic"} dictation`,
      description: newValue 
        ? "Advanced features are now available" 
        : "Using free dictation features",
    });
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen p-6 w-full max-w-sm mx-auto">
      <header className="w-full flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Mic className="h-6 w-6 text-purple-600" />
          <h1 className="text-xl font-bold text-gray-800">SpeechHelper</h1>
        </div>
        <SettingsButton />
      </header>

      <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-600">Mode</span>
          <DictationToggle isPaid={isPaid} onToggle={handleModeToggle} />
        </div>
        
        <div className="flex flex-col items-center justify-center py-4">
          <MicrophoneButton 
            isListening={isListening} 
            onClick={toggleListening} 
            isPaid={isPaid}
          />
          <span className="mt-3 text-sm font-medium text-gray-600">
            {isListening ? "Listening..." : "Click to start dictation"}
          </span>
        </div>
      </div>

      <div className="w-full bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-md font-semibold text-gray-800 mb-2">
          {isPaid ? "Advanced Features" : "Basic Features"}
        </h2>
        <FeaturesList isPaid={isPaid} />
      </div>

      {transcript && (
        <div className="w-full bg-white rounded-lg shadow-md p-6">
          <h2 className="text-md font-semibold text-gray-800 mb-2">Last Transcript</h2>
          <p className="text-sm text-gray-600">{transcript}</p>
        </div>
      )}
    </div>
  );
};

export default Index;
