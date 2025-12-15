import { useEffect, useState } from 'react';
import { getTrack, type TrackDetailsResource } from '../dal/api';

export function useTrackDetail(selectedTrackId: string | null) {
    const [trackDetails, setTrackDetails] = useState<TrackDetailsResource | null>(null);
    useEffect(() => {

        if (!selectedTrackId) {
            setTrackDetails(null);
            return;
        }

        getTrack(selectedTrackId).then((json) => {
            setTrackDetails(json.data);
        });
    }, [selectedTrackId]);
    return { trackDetails };
}