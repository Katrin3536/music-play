//
// // const tracks = null;
// import { useEffect, useState } from 'react';
//
// // const tracks = [
// //     { id: 1, isSelected: false, title: 'Soundtrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3' },
// //     {
// //         id: 2,
// //         isSelected:true,
// //         title: 'Instrumental soundtrack',
// //         url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
// //     },
// // ];
//
//
// export function App() {
//
//     const [selectedTrackId,setSelectedTrackId] = useState(null)
//     const [selectedTrack,setSelectedTrack] = useState(null)
//     const [tracks,setTracks] = useState(null);
//
//     useEffect(()=>{
//         fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
//             headers: {
//             'api-key':"8b461064-75d6-4e70-b373-66cacf55faef",
//         }} ).then(res=>res.json())
//             .then(json=>setTracks(json.data))
//     },[])
//
//     useEffect(()=>{
//
//         if(!selectedTrackId){
//             return;
//         }
//
//         fetch(
//             "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + selectedTrackId,
//             {
//                 headers: { "api-key": "8b461064-75d6-4e70-b373-66cacf55faef" },
//             },
//         )
//             .then((res) => res.json())
//             .then((json) => {
//                 setSelectedTrack(json.data)
//             })
//     },[selectedTrackId])
//
//     // const li1 = <li>
//     //     <div>{ tracks[0].title }</div>
//     //     <audio src={ tracks[0].url } controls></audio>
//     // </li>;
//     //
//     // const li2 = <li>
//     //     <div>{ tracks[1].title }</div>
//     //     <audio src={ tracks[1].url } controls></audio>
//     // </li>;
//
//     // const newLiElements = tracks.map((track)=>{
//     //     return (
//     //         <li>
//     //             <div>{ track.title }</div>
//     //             <audio src={ track.url } controls></audio>
//     //         </li>
//     //     )
//     // })
//     if (tracks===null) {
//         return (
//             <div>
//                 <h1>Musicfun player</h1>
//                 <span>Loading...</span>
//             </div>
//         );
//     }
//
//     if (tracks.length === 0) {
//         return (
//             <div>
//                 <h1>Musicfun player</h1>
//                 <span>No tracks</span>
//             </div>
//         );
//     }
//
//     return (
//         <div style={{display:"flex", gap:"30px"}}>
//             <h1>Musicfun player</h1>
//             <button onClick={()=>{
//                 setSelectedTrack(null)
//                 setSelectedTrackId(null)
//             }}>Сбросить выделение</button>
//             <ul>
//                 {/*{ newLiElements }*/ }
//                 { tracks.map((track:any) => {
//                     return (
//                         <li key={ track.id } style={{
//                             border: track.id===selectedTrackId?"1px solid orange":"none"
//                         }}>
//                             <div onClick={()=>{
//                                 setSelectedTrackId(track.id)
//                             }}>{ track.attributes.title }</div>
//                             <audio src={ track.attributes.attachments[0].url } controls></audio>
//                         </li>
//                     );
//                 }) }
//             </ul>
//             <div>
//                 <h3>Details</h3>
//                 {!selectedTrack && !selectedTrackId  && "Track is not selected"}
//                 {!selectedTrack && selectedTrackId && "...loading"}
//                 {selectedTrack && selectedTrackId && selectedTrack.id !== selectedTrackId && "...loading"}
//                 {selectedTrack && <div>
//                         <h3>{selectedTrack.attributes.title}</h3>
//                         <h4>Lyrics</h4>
//                         <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
//                     </div> }
//             </div>
//         </div>
//     );
// }
//
//
