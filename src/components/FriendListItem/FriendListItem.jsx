import s from './FriendListItem.module.css';

import PropTypes from 'prop-types';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.status : s.statusOnline}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="{name}" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
