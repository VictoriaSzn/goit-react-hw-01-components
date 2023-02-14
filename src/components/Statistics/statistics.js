import PropTypes from 'prop-types';
import styles from './statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, stats }) {
    return (
       <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.stat_list}> 
                {stats.map(stat => (
                    <li className={styles.item} key={stat.id} backgroundColor={getRandomHexColor()}>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section> 
    );
};
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string,
          percentage: PropTypes.number,
        }),
    ),
};