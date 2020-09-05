import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor () {
        super();

        this.state = {
              sections : [
                {
                  title: 'Hats',
                  imageUrl: 'https://i0.wp.com/gentlemanzone.com/wp-content/uploads/2018/01/guide-hats-min.jpg?fit=1599%2C900&ssl=1',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'Jackets',
                  imageUrl: 'http://4.bp.blogspot.com/-Oal-4URQG_4/Th1JXxAUxtI/AAAAAAAAAnM/bf6EIImYyiA/s1600/zara-homme-hiver-2010-2011-2.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'Sneakers',
                  imageUrl: 'https://media.gqindia.com/wp-content/uploads/2016/05/GQ-India-GUCCI-414684_KW040_8162.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'Womens',
                  imageUrl: 'https://www.interbrand.com/wp-content/uploads/2018/09/QA_Zara_v1.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'Mens',
                  imageUrl: 'http://ftape.com/media/wp-content/uploads/2013/08/Zara-FW13-Mens-Campaign_01.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ],
        }
    }
    
     

    render () {
        return (
            <div className='directory-menu'>
            {
            this.state.sections.map( ({title , imageUrl ,id ,size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
            ))
            }
                </div>
        )
    }
}


export default Directory;