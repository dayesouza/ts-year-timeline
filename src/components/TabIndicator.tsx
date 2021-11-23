import { memo } from "react";
import styled from "styled-components";

interface TabIndicatorProps {
  primaryColor: string;
  secondaryColor: string;
  activeTabLabel: number;
  label: number;
  onClick: (label: number) => void;
}

export const TabIndicator: React.FC<TabIndicatorProps> = memo(
  function TabIndicator({
    primaryColor,
    secondaryColor,
    activeTabLabel,
    label,
    onClick,
  }) {
    return (
      <Item
        isActive={activeTabLabel === label}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        onClick={() => onClick(label)}
      >
        <Label className="label">{label}</Label>
      </Item>
    );
  }
);

const Item = styled.li<{
  isActive: boolean;
  primaryColor: string;
  secondaryColor: string;
}>`
  display: inline-block;
  margin-right: 15em;
  position: relative;
  cursor: pointer;
  background-color: ${({ isActive, primaryColor, secondaryColor }) =>
    isActive ? primaryColor : secondaryColor};
  width: 20px;
  height: 20px;
  border-radius: 50%;

  :after {
    left: 100%;
  }

  :before {
    right: 100%;
  }

  &:before,
  &:after {
    content: "";
    width: 15em;
    border-bottom: 1px solid;
    position: absolute;
    top: 50%;
    color: ${({ secondaryColor }) => secondaryColor};
  }

  &:first-of-type:before,
  &:last-of-type:after {
    display: none;
  }

  &:last-of-type {
    margin-right: unset;
  }
`;
const Label = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: -8px;
`;
