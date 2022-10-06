import { useEffect, useState } from 'react'
import { getDatabase, orderByKey, query, ref, get, startAt, limitToFirst } from 'firebase/database'

export default function useVideoList(page) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            // get videos from database
            const db = getDatabase();
            const videosRef = ref(db, 'videos');
            const videoQuery = query(
                videosRef,
                orderByKey(),
                startAt("" + page),
                limitToFirst(8)
            );

            try {
                setError(false);
                setLoading(true);
                // request data from firebase
                const snapshot = await get(videoQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setVideos((prevVideos) => {
                        return [...prevVideos, ...Object.values(snapshot.val())]
                    });
                    // setVideos(Object.values(snapshot.val()));
                } else {
                    // data doesn't exist
                    setHasMore(false);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchVideos();

    }, [page]);

    return {
        loading,
        error,
        videos,
        hasMore
    };
}
