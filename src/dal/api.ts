
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

export const getTrack=(selectedTrackId:string)=>{
    let promise:Promise<GetTrackDetailsOutput> = fetch(
        "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + selectedTrackId,
        {
            // headers: { "api-key": "8b461064-75d6-4e70-b373-66cacf55faef" },- старый ключ
            headers: { "api-key": "8408806b-2058-4f5d-a21b-bc9c8d8e769b" },

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
       headers: { "api-key": "8408806b-2058-4f5d-a21b-bc9c8d8e769b" },
    }).then(res => res.json())

    return promise
}