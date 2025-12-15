import { TrackItem } from './TrackItem';
import { useTracks } from '../bll/useTracks';
import styles from './TracksList.module.css';

type Props = {
    onSelectId:(trackId:string | null)=>void
    selectedTrackId: string | null
}

export function TracksList(props:Props) {

    const {tracks} = useTracks()

    if (tracks === null) {
        return (
            <div>
                <span>Loading...</span>
            </div>
        );
    }

    if (tracks.length === 0) {
        return (
            <div>
                <span>No tracks</span>
            </div>
        );
    }

    const handleResetClick = () => {
        props.onSelectId?.(null);
    };

    const handleClick = (trackId: string) => {
        props.onSelectId?.(trackId);
    };

    return <div>
        <button onClick={ handleResetClick }>reset</button>
        <ul className={styles.tracks}>
            {/*{ newLiElements }*/ }
            { tracks.map((track) => {

                return (
                    <TrackItem key={ track.id }
                               track={ track }
                               handleClick={ handleClick }
                               isSelected={ track.id === props.selectedTrackId }
                               />);
            }) }
        </ul>
    </div>;
}

