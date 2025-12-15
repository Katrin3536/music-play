import { useTrackDetail } from '../bll/useTrackDetail';

import styles from './TrackDetail.module.css';


type Props ={
    trackId: string | null
}

export function TrackDetail(props: Props) {
   const {trackDetails} = useTrackDetail(props.trackId)

    const selectedTrackId =props.trackId;

    return  <div className={styles.track}>
        <h3>Details</h3>
        {!trackDetails && !selectedTrackId  && "Track is not selected"}
        {!trackDetails && selectedTrackId && "...loading"}
        {trackDetails && selectedTrackId && trackDetails.id !== selectedTrackId && "...loading"}
        {trackDetails && <div>
            <h3>{trackDetails.attributes.title}</h3>
            <h4>Lyrics</h4>
            <p>{trackDetails.attributes.lyrics ?? "no lyrics"}</p>
        </div> }
    </div>
}