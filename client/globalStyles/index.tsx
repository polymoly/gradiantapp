import { jss } from "react-jss";

export default jss
  .createStyleSheet({
    "@global": {
      body: {
        margin: 0,
        padding: 0,
        background: "#fafafa",
      },
      [`*,*::after,*::before`]: {
        boxSizing: "border-box",
      },
    },
  })
  .attach();
