import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" size="sm">
          {selectedPlatform?.name || "Platforms"} <FaChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent maxW={10}>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            value={platform.name}
          >
            {platform.name}
          </MenuItem>
        ))}
        <MenuItem value="item3">Item3</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
