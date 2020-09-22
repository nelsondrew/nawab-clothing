import WithSpinner from '../with-spinner/with-spinner.component';
import { connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import CollectionPage from '../../pages/collection/collection.component';
import { compose} from 'redux';

const mapStateToProps = createStructuredSelector ({
    isLoading : state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;