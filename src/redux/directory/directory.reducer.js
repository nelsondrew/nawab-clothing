const INITIAL_STATE ={
    sections : [
        {
          title: 'Hats',
          imageUrl: 'http://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2016/05/anglo_2000x1125_peakyblinders.jpg',
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
      ]
}

const directoryReducer = ( state = INITIAL_STATE , action) => {
  switch(action.type){
      default:
          return  state;
  }
};

export default directoryReducer;