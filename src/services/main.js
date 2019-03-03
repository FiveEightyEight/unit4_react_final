import axios from 'axios';
import API_KEY from './API_KEY';


const search = (query, count = 10, page = '') => {
    return axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
            part: 'snippet',
            maxResults: count,
            videoDefinition: 'high',
            type: 'video',
            videoEmbeddable: 'true',
            key: API_KEY,
            q: query,
            pageToken: page,
        }
    });
};

const buildSearchResultObject = (dataObj, searchQuery, simple = true) => {
    // requires response.data
    const { data } = dataObj;
    const obj = {}
    const arr = [];
    obj['query'] = dataObj.query || searchQuery;
    obj['previousPageToken'] = '';
    obj['nextPageToken'] = data.nextPageToken;
    for (let i = 0; i < data.items.length; i++) {
        const currentVideo = data.items[i]
        arr.push(parseVideo(currentVideo, simple));
    }
    obj['items'] = arr;
    return obj;
};

const parseVideo = (resultObj, simple = true) => {
    const parsed = {};
    if (simple) {
        parsed['videoId'] = resultObj.id.videoId;
        parsed['videoTitle'] = resultObj.snippet.title;
        parsed['channelId'] = resultObj.snippet.channelId;
        parsed['channelName'] = resultObj.snippet.channelTitle;
        parsed['publishedAt'] = resultObj.snippet.publishedAt;
        parsed['thumbnail'] = resultObj.snippet.thumbnails.medium.url;
        parsed['description'] = resultObj.snippet.description;
    } else {
        parsed['videoId'] = resultObj.id.videoId;
        parsed['videoTitle'] = resultObj.snippet.title;
        parsed['channelId'] = resultObj.snippet.channelId;
        parsed['channelName'] = resultObj.snippet.channelTitle;
        parsed['publishedAt'] = resultObj.snippet.publishedAt;
        parsed['thumbnail'] = resultObj.snippet.thumbnails;
        parsed['description'] = resultObj.snippet.description;
    }
    return parsed;
};

const doSearch = (query) => {
    return search(query, 8)
    .then(response => {
        return buildSearchResultObject(response, query)
    })
    .then(search => {
        return search.items
    })
    .catch( err => {
        return err
    })
}

export {
    doSearch,
}