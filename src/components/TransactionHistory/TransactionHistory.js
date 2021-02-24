import s from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <table className={s.transHistory}>
      <thead className={s.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((el) => (
          <tr key={el.id} className={s.tableRow}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(Object),
};
export default TransactionHistory;
