// == React 18 compatibility Custom Type for a React functional component with props AND CHILDREN ==
// Source: https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc/71800185#71800185 solution by ashuvssut

type FCC<P = {}> = import("react").FC<import("react").PropsWithChildren<P>>;
