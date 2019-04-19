# styled-themer

Utility function to select a theme element from a styled components theme

## Installation

```
npm i styled-themer
```

## Usage

The simplest way to use `styled-themer` is via the default import `t`, which can be used to select a particular theme element as follows:

```javascript
import styled from "styled-components";
import t from "styled-themer";

// Normal way
const Text1 = styled.span`
  color: ${props => props.theme.color.primary};
`;

// Using styled-themer
const Text2 = styled.span`
  color: ${t("color", "primary")};
`;
```

Apart from this, there are also shorthands `color`, `bgColor` and `fontSize` to further reduce the amount of code required.

```javascript
import styled from "styled-components";
import { color, bgColor, fontSize } from "styled-themer";

// Normal way
const Wrapper = styled.div`
  color: ${props => props.theme.color.primary};
  background-color: ${props => props.theme.color.background};
  font-size: ${props => props.theme.fontSize.normal};
`;

// Using styled-themer
const Wrapper22 = styled.span`
  ${color("primary")};
  ${bgColor("background")};
  ${fontSize("normal")};
`;
```

`color` and `bgColor` select the given key from `theme.color`, and add the CSS property (`color:` and `background-color:`) as a prefix.
