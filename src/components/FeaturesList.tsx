
import { Check } from "lucide-react";

interface FeaturesListProps {
  isPaid: boolean;
}

const FeaturesList = ({ isPaid }: FeaturesListProps) => {
  const basicFeatures = [
    "Basic voice dictation",
    "English language support",
    "Copy text to clipboard",
    "10 minutes per session"
  ];

  const advancedFeatures = [
    "Advanced voice recognition",
    "Multiple language support",
    "Punctuation and formatting",
    "Unlimited dictation time",
    "Custom voice commands",
    "Cloud backup of transcripts"
  ];

  const features = isPaid ? advancedFeatures : basicFeatures;

  return (
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Check className={isPaid ? "h-4 w-4 text-purple-600" : "h-4 w-4 text-blue-500"} />
          <span className="text-sm text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
