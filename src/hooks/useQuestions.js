import { useEffect, useState } from 'react'
import { getDatabase, orderByKey, query, ref, get } from 'firebase/database'

export default function useQuestions(videoID) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            // get videos from database
            const db = getDatabase();
            const quizRef = ref(db, "quiz/" + videoID + "/questions");
            const quizQuery = query(
                quizRef,
                orderByKey()
            );

            try {
                setError(false);
                setLoading(true);
                // request data from firebase
                const snapshot = await get(quizQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    // setQuestions((prevQuestions) => {
                    //     return [...prevQuestions, ...Object.values(snapshot.val())]
                    // });
                    setQuestions(Object.values(snapshot.val()));
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchQuestions();

    }, [videoID]);

    return {
        loading,
        error,
        questions
    };
}
