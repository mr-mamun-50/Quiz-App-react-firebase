import { useEffect, useState } from 'react'
import { getDatabase, orderByKey, query, ref, get } from 'firebase/database'

export default function useAnswers(videoID) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        async function fetchAnswers() {
            // get videos from database
            const db = getDatabase();
            const answerRef = ref(db, "answers/" + videoID + "/questions");
            const answerQuery = query(
                answerRef,
                orderByKey()
            );

            try {
                setError(false);
                setLoading(true);
                // request data from firebase
                const snapshot = await get(answerQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    // setAnswers((prevAnswers) => {
                    //     return [...prevAnswers, ...Object.values(snapshot.val())]
                    // });
                    setAnswers(Object.values(snapshot.val()));
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchAnswers();

    }, [videoID]);

    return {
        loading,
        error,
        answers
    };
}
