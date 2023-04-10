import PropTypes from 'prop-types';

import {
  UserCard,
  UserDescription,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsItem,
  UserStatsLabel,
  UserStatsQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserCard>
      <UserDescription>
        <UserImage src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserStats>
        <UserStatsItem>
          <UserStatsLabel>Followers</UserStatsLabel>
          <UserStatsQuantity>{stats.followers}</UserStatsQuantity>
        </UserStatsItem>

        <UserStatsItem>
          <UserStatsLabel>Views</UserStatsLabel>
          <UserStatsQuantity>{stats.views}</UserStatsQuantity>
        </UserStatsItem>

        <UserStatsItem>
          <UserStatsLabel>Likes</UserStatsLabel>
          <UserStatsQuantity>{stats.likes}</UserStatsQuantity>
        </UserStatsItem>
      </UserStats>
    </UserCard>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object,
  }),
};
