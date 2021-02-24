import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1270131217158078464/oH7KNo7x_400x400.jpg" alt="IgorMoura" />
            <div>
                <strong>Igor Moura</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 60</p>
            </div>
        </div>
    )
}