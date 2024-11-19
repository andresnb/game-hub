import {createSystem, defaultConfig, defineConfig, mergeConfigs} from "@chakra-ui/react"

const theme = defineConfig({
    theme: {
        tokens:{
            colors:{
                gray:{
                    50:{value:"#f9f9f9"},
                    100:{value:"#e4e5f1"},
                    200:{value:"#d3d3d3"},
                    300:{value:"#b3b3b3"},
                    400:{value:"#a0a0a0"},
                    500:{value:"#898989"},
                    600:{value:"#6c6c6c"},
                    700:{value:"#202020"},
                    800:{value:"#343b4d"},
                    900:{value:"#484e5f"},
                    950:{value:"#343b4d"}
                },
                black:{value:"#24262b"},
                white:{value:"#fafafa"}            }
        }
    },
  })

  const config = mergeConfigs(defaultConfig, theme);
  const system = createSystem(config);
  
  export default system;