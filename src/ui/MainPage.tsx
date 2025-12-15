import { Header } from './Header';
import { SidebarMenu } from './SidebarMenu';
import { PageTitle } from './PageTitle';
import { TracksList } from './TracksList';
import { TrackDetail } from './TrackDetail';
import { Footer } from './Footer';
import { useTrackSelection } from '../bll/useTrackSelection';
import styles from './MainPage.module.css'

export function MainPage() {

const {trackId, setTrackId}=useTrackSelection()

    const handleTrackSelect = ((id: string | null): void => {
        return setTrackId(id);
    });

    return <div>
        <Header/>
        <SidebarMenu/>
        <PageTitle/>
        <div className={styles.mainPage}>
            <TracksList onSelectId={ handleTrackSelect } selectedTrackId={ trackId }/>
            <TrackDetail trackId={ trackId }/>
        </div>
        <Footer/>
    </div>;
}