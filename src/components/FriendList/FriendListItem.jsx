import s from "./FriendList.module.css";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.status : s.statusOnline}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="{name}" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
