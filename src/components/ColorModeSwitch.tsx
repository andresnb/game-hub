import { HStack } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { useColorMode } from "@/components/ui/color-mode";

function Capitalize(str: String) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch colorPalette="green" onCheckedChange={toggleColorMode}>
        {Capitalize(colorMode!) + " Mode"}
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;