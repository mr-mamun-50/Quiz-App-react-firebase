import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useVideoList from '../hooks/useVideoList'
import Video from './Video'
import InfiniteScroll from 'react-infinite-scroll-component';
import loadingPlay from '../assets/images/loading_play_4.gif';

export default function Videos() {

    const [page, setPage] = useState(1);
    const { loading, error, videos, hasMore } = useVideoList(page);

    console.log(videos)

    return (
        <div>
            {videos.length > 0 && (
                <InfiniteScroll dataLength={videos.length} hasMore={hasMore} loader={<img src={loadingPlay} alt="Loading..." />} next={() => setPage(page + 8)}>
                    {videos.map((video) =>
                        video.noq ? (
                            <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID} state={video.title}>
                                <Video title={video.title} id={video.youtubeID} noq={video.noq} />
                            </Link>
                        ) : (
                            <Video title={video.title} id={video.youtubeID} noq={video.noq} key={video.youtubeID} />
                        ))}
                </InfiniteScroll>
            )
            }

            <div className='infinite-scroll-component'>
                {!loading && videos.length === 0 && <div>No data found!</div>}
                {error && <div>There was an error!</div>}
                {loading && <img src={loadingPlay} alt="Loading..." style={{ marginTop: '200px' }} />}
            </div>
        </div >
    )
}
