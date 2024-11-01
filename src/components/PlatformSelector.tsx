import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatforms from "@/hooks/usePlatforms";
import { FaChevronDown } from "react-icons/fa";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" size="sm">
          Platforms <FaChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent maxW={10}>
        {data.map((platform) => (
          <MenuItem value={platform.name}>{platform.name}</MenuItem>
        ))}
        <MenuItem value="item3">Item3</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
