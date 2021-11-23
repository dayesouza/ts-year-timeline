import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { TabIndicator } from "./TabIndicator";

interface TabsProps {
  primaryColor?: string;
  secondaryColor?: string;
}

export const Tabs: React.FC<TabsProps> = memo(function Tabs({
  primaryColor = "#267BFE",
  secondaryColor = "#C4C4C4",
  children,
}) {
  const scrl = useRef<null | HTMLOListElement>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling

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

  const slide = (shift: any) => {
    if (scrl.current) {
      scrl.current.scrollLeft += shift;
    }
    setscrollX(scrollX + shift); // Updates the latest scrolled postion

    //For checking if the scroll has ended
    if (
      Math.floor(
        (scrl?.current?.scrollWidth as number) -
          (scrl?.current?.scrollLeft as number)
      ) <= (scrl?.current?.offsetWidth as number)
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  const scrollCheck = () => {
    setscrollX(scrl?.current?.scrollLeft as number);
    if (
      Math.floor(
        (scrl?.current?.scrollWidth as number) -
          (scrl?.current?.scrollLeft as number)
      ) <= (scrl?.current?.offsetWidth as number)
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  useEffect(() => {
    if (
      scrl.current &&
      scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
    return () => {};
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);

  return (
    <Container>
      <TabsContainer>
        <Button
          color={primaryColor}
          disabled={scrollX == 0}
          onClick={() => slide(-300)}
        >
          <Icon className="bi bi-chevron-left"></Icon>
        </Button>
        <TabList ref={scrl} onScroll={scrollCheck}>
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
        <Button
          color={primaryColor}
          disabled={scrolEnd}
          onClick={() => slide(+300)}
        >
          <Icon className="bi bi-chevron-right"></Icon>
        </Button>
      </TabsContainer>
      <Container>{tabRendered}</Container>
    </Container>
  );
});

const TabsContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button<{ color: string }>`
  &:enabled {
    color: ${({ color }) => color};
  }
  cursor: pointer;
  background-color: unset;
  border: unset;
  font-size: 22px;
`;

const Icon = styled.i``;

const Container = styled.div``;

const TabList = styled.ol`
  text-align: center;
  display: flex;
  align-items: center;
  list-style: none;
  max-width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding-bottom: 35px;
  padding-top: 35px;

  &::-webkit-scrollbar {
    background: transparent;
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
`;
