import PropTypes from 'prop-types';
import styles from './transaction.module.css';

export default function TransactionHistory({transactions}) {
    return (
        <table className={styles.transaction_history}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
           
            <tbody>
                 {transactions.map(transaction => (
                <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>
            ))}
               
            </tbody>
        </table>
    );
};
TransactionHistory.propTypes = {
     transactions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string,
          amount: PropTypes.string,
          currency: PropTypes.string,
        }),
    ),
};
                