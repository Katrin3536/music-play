import { type TrackListItemResource } from '../dal/api';
import styles from './TracksList.module.css';
import { clsx } from 'clsx'

type Props ={
    handleClick:(id:string)=>void
    isSelected:boolean
    track:TrackListItemResource
}

export function TrackItem(props:Props) {

  const handleClickTrack=()=>{props.handleClick(props.track.id)};

    // const className = styles.track +" "+(props.isSelected?styles.selected:"");

    const className = clsx({
    [styles.track]:true,
        [styles.selected]:props.isSelected
    })

    return (
        <li className ={className} key={ props.track.id }>
            <div onClick={ handleClickTrack }>{ props.track.attributes.title }</div>
            <audio src={ props.track.attributes.attachments[0].url } controls></audio>
        </li>
    );
}