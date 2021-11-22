import React, { memo, useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { TabIndicator } from "./TabIndicator";

interface TabsProps {
  primaryColor?: string;
  secondaryColor?: string;
}

export const Tabs: React.FC<TabsProps> = memo(function Tabs({
  primaryColor = "#2596be",
  secondaryColor = "#D2d2d2",
  children,
}) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const onClick = useCallback(
    (label: number) => {
      setActiveTab(label);
    },
    [setActiveTab]
  );

  const tabRendered = useMemo(() => {
    return React.Children.map(children, (child: any, index: number) => {
      if (!activeTab && index === 0) {
        setActiveTab(child.props.year);
        return React.cloneElement(child);
      }
      if (child.props.year !== activeTab) return undefined;
      return React.cloneElement(child);
    });
  }, [children, activeTab, setActiveTab]);

  return (
    <Container>
      <TabList>
        {React.Children.map(children, (child: any) => {
          const { year } = child.props;

          return (
            <TabIndicator
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              activeTabLabel={activeTab}
              key={year}
              label={year}
              onClick={onClick}
            />
          );
        })}
      </TabList>
      <Container>{tabRendered}</Container>
    </Container>
  );
});

const Container = styled.div``;
const TabList = styled.ol`
  padding-left: 0;
  text-align: center;
`;
