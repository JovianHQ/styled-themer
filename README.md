# styled-themer

Utility function to select a theme element from a styled components theme

## Installation

```
npm i styled-themer
```

## Usage

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
