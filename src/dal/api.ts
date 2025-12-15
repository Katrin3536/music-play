
export type TrackDetailsResource={
    id:string
    attributes:TrackDetailsAttributes
}

type TrackDetailsAttributes = {
    title:string
    lyrics: string | null
}

type GetTrackDetailsOutput={
    data:TrackDetailsResource
}

const prepareHeaders =()=>{
    const apiKey = import.meta.env.VITE_API_KEY

    if(!apiKey) return {}

    return { "api-key": apiKey }
}

export const getTrack=(selectedTrackId:string)=>{
    let promise:Promise<GetTrackDetailsOutput> = fetch(
        "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + selectedTrackId,
        {
            // headers: { "api-key": "8b461064-75d6-4e70-b373-66cacf55faef" },- старый ключ
            headers: prepareHeaders(),

        },
    )
        .then((res) => res.json())

    return promise
}

type TrackAttachment = {
    url:string
}

type TrackListItemAttributes = {
    title:string
    attachments:Array<TrackAttachment>
}

export type TrackListItemResource = {
    id: string
    attributes:TrackListItemAttributes
}

type GetTrackListOutput={
    data:Array<TrackListItemResource>
}
export const getTracks = ()=>{
   const promise:Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
       headers: prepareHeaders(),
    }).then(res => res.json())

    return promise
}