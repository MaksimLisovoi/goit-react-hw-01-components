import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={s.friendList}>
      {friends.map((el) => {
        const { avatar, name, isOnline } = el;
        return (
          <FriendListItem
            key={el.id}
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
