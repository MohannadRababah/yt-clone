import axios from "axios";

const KEY='AIzaSyAnUYd2GdNFFU2jXHm_wZ9WLo6bhQtbvLA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'

    }
});
