import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {

    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios Completados</span>
            <span>{challengesCompleted} </span>
        </div>
    );
}