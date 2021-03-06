import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import './media.css';

class Media extends PureComponent {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         author : props.author
    //     }
    //     //this.handleClick = this.handleClick.bind(this);
    // }s

    state = {
          author : this.props.author
        }

    // handleClick= (event) =>{
    //     this.setState({
    //         author: 'Miguel'
    //     })
    // }
    render(){
        const styles = {
            container:{
                color:'#44546b',
                cursor:'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return(
            <div className = "Media" onClick={this.props.handleClick}>
                <div className = "Media-cover">
                    <img src={this.props.cover}
                         className="Media-image"
                         alt=""
                         width={260} 
                         height={160}
                        />
                    <h3 className="Media-title">
                        {this.props.title}
                    </h3>
                    <p className="Media-author">
                       {this.props.author}
                    </p>
                </div>
            </div>
        )       
    }
}

Media.propTypes = {
    image :PropTypes.string,
    title : PropTypes.string.isRequired,
    author : PropTypes.string,
    type: PropTypes.oneOf(['video','audio'])
}

export default Media;