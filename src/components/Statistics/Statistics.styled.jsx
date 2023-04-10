import styled from 'styled-components';

export const Container = styled.section`
  width: ${p => p.theme.sizes.width.app};
  margin: ${p => p.theme.space.m.mAuto};
  border-radius: ${p => p.theme.radii.borderRadius.s};
  box-shadow: ${p => p.theme.shadows.one};
  background-color: ${p => p.theme.colors.bgEl};
  margin-top: ${p => p.theme.space.mt};
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.statsHead};
  font-size: ${p => p.theme.fontSizes.xl};
  text-align: ${p => p.theme.textAlign};
  padding: ${p => p.theme.space.p.l};
  margin: ${p => p.theme.space.m.m};
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.fontWeight.bold};
`;

export const StatList = styled.ul`
  padding: ${p => p.theme.space.p.zero};
  margin: ${p => p.theme.space.m.m};
  display: ${p => p.theme.display.flex};
  justify-content: ${p => p.theme.justifyContent.sb};
`;
export const StatItem = styled.li`
  background-color: ${getRandomColor};
  display: ${p => p.theme.display.flex};
  flex-direction: ${p => p.theme.flexDirection.col};
  align-items: ${p => p.theme.alignItems.center};
  padding: ${p => p.theme.space.p.s};
  gap: ${p => p.theme.space.gridGap.s};
  width: ${p => p.theme.sizes.width.max};
`;

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}