import styled from 'styled-components';

export const UserCard = styled.div`
  width: ${p => p.theme.sizes.width.app};
  background-dolor: ${p => p.theme.colors.bgEl};
  margin: ${p => p.theme.space.m.mAuto};
`;
export const UserDescription = styled.div`
  padding-top: ${p => p.theme.space.p.l};
  padding-bottom: ${p => p.theme.space.p.l};
  display: ${p => p.theme.display.flex};
  flex-direction: ${p => p.theme.flexDirection.col};
  align-items: ${p => p.theme.alignItems.center};
`;

export const UserImage = styled.img`
  margin-bottom: ${p => p.theme.space.mb};
  width: ${p => p.theme.sizes.width.image};
  background-color: ${p => p.theme.colors.bg};
`;

export const UserName = styled.p`
  margin: ${p => p.theme.space.m.m};
  margin-bottom: ${p => p.theme.space.mb};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.fontWeight.bold};
`;
export const UserTag = styled.p`
  margin: ${p => p.theme.space.m.m};
  margin-bottom: ${p => p.theme.space.mb};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.statsHead};
`;
export const UserLocation = styled.p`
  margin: ${p => p.theme.space.m.m};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.statsHead};
`;
export const UserStats = styled.ul`
  display: ${p => p.theme.display.flex};
  padding: ${p => p.theme.space.p.zero};
  border-top: ${p => p.theme.borders.border};
  background-color: ${p => p.theme.colors.bgUsSt};
`;
export const UserStatsItem = styled.li`
  display: ${p => p.theme.display.flex};
  flex-direction: ${p => p.theme.flexDirection.col};
  align-items: ${p => p.theme.alignItems.center};
  padding: ${p => p.theme.space.p.m};
  width: ${p => p.theme.sizes.width.element};
  gap: ${p => p.theme.space.gridGap.s};
`;

export const UserStatsLabel = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const UserStatsQuantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.fontWeight.light};
  font-size: ${p => p.theme.fontSizes.m};
`;
