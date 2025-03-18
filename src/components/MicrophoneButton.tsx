
import { Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface MicrophoneButtonProps {
  isListening: boolean;
  onClick: () => void;
  isPaid: boolean;
}

const MicrophoneButton = ({ isListening, onClick, isPaid }: MicrophoneButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg",
        isListening 
          ? isPaid 
            ? "bg-purple-100 text-purple-600 animate-pulse" 
            : "bg-blue-100 text-blue-600 animate-pulse"
          : isPaid 
            ? "bg-purple-600 text-white hover:bg-purple-700" 
            : "bg-blue-500 text-white hover:bg-blue-600"
      )}
    >
      {isListening ? (
        <MicOff className="h-10 w-10" />
      ) : (
        <Mic className="h-10 w-10" />
      )}
    </button>
  );
};

export default MicrophoneButton;
