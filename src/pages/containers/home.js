import React,{Component} from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal-container';
class Home extends Component{
    render(){
        return(
            <HomeLayout> 
               <Related/>
               <Categories categories={this.props.data.categories}/> 
               <ModalContainer>
                   <p>hola</p>
               </ModalContainer>
            </HomeLayout>
        )
    }
} 

export default Home;