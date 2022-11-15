import React from "react";
import { Button } from "native-base";

const Submit = (nt, bg, color, children, onPress) => {
  return (
    <Button
      w="full"
      h={55}
      mt={nt}
      rounded="full"
      bg={bg}
      _text={{ color: color, fontWeight: "bold" }}
      _pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};
export default Submit;
