import Box from "../src/components/box";
import theme from "../src/theme/theme";

export default function HomeScreem(){
  return (
    <Box 
      tag={'main'}
      styleSheet={{fontFamily: theme.typography.fontFamily}}
    >
      Hello World!!
    </Box>
  )
}
