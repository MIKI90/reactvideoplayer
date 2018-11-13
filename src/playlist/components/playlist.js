import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play';
// class Playlist extends Component {
//     render(){
//         const playlist = this.props.data.categories[0].playlist;
//         return(
//             <div className="Playlist">
//             {
//                 playlist.map((item) =>{
//                     return <Media {...item} key={item.id} />
//                 })
//             }
//             </div>
//         )
//     }
// }

function Playlist(props){
        const playlist = props.data.categories[0].playlist;
        return(
            <div className="Playlist">
            {
                playlist.map((item) =>{
                    return <Media {...item} key={item.id} />
                })
            }
            </div>
        )
}

export default Playlist;