
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface DictationToggleProps {
  isPaid: boolean;
  onToggle: (value: boolean) => void;
}

const DictationToggle = ({ isPaid, onToggle }: DictationToggleProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className={cn(
        "text-sm font-medium transition-colors",
        !isPaid ? "text-blue-600" : "text-gray-400"
      )}>
        Basic
      </span>
      
      <Switch
        checked={isPaid}
        onCheckedChange={onToggle}
        className={cn(
          isPaid ? "bg-purple-600" : "bg-blue-500",
          "transition-colors"
        )}
      />
      
      <span className={cn(
        "text-sm font-medium transition-colors",
        isPaid ? "text-purple-600" : "text-gray-400"
      )}>
        Advanced
      </span>
    </div>
  );
};

export default DictationToggle;
