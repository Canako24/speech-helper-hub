
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const SettingsButton = () => {
  const handleSettingsClick = () => {
    toast({
      title: "Settings",
      description: "Settings panel would open here",
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleSettingsClick}
      className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
    >
      <Settings className="h-5 w-5" />
    </Button>
  );
};

export default SettingsButton;
