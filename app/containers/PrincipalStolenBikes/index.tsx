import React, { useEffect, useState } from 'react';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Filter';
import ItemCard from '../../components/ItemCard';
import reducer from './reducer';
import saga from './saga';
import { getStolenBikes, getCountBikes } from './actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectBikes, makeSelectCountBikes,makeSelectError } from './selectors';
import ReactPaginate from 'react-paginate';
import './index.css';

const key = 'principal';

const stateSelector = createStructuredSelector({
    bikes: makeSelectBikes(),
    countBikes: makeSelectCountBikes(),
    error:makeSelectError()
});

export default function PrincipalPage() {

    useInjectReducer({ key: key, reducer: reducer });
    useInjectSaga({ key: key, saga: saga });

    const { bikes, countBikes,error} = useSelector(stateSelector);

    const dispatch = useDispatch();

    const [filter, setFilter] = useState({search:""} as any);
    const [load, setLoad] = useState(false);

    


    useEffect(() => {
        dispatch(getStolenBikes({
            page: 0,
            perPage: 10,
            search: ""
        }));

    }, []);

    useEffect(() => {
       if(bikes&&bikes.length>=0){
         dispatch(getCountBikes({
            page: 0,
            perPage: 10,
            search:filter.search
        }));
       }
    }, [bikes]);

    useEffect(() => {
        if(countBikes){
          setLoad(false);
        }
     }, [countBikes]);


    return (<div>
        <Filter search={(data) => {
            setLoad(true);
            setFilter(data)
            dispatch(getStolenBikes({
                page: 0,
                perPage: 10,
                search: data.search,
                timeBefore: data.timeBefore,
                timeAfter: data.timeAfter
            }));
        }} />
        <br/>
        {!error?(!load?
        (bikes.length>0?bikes.map(bike => (<ItemCard key={bike.id} title={bike.title} text={bike.description} date={bike.date_stolen} img={bike.thumb} location={bike.stolen_location} />)):<div>No Results</div>)
        :<div>loading</div>):"Ooops,something went wrong"}
        <br/>
        <ReactPaginate pageCount={countBikes.proximity ? Math.ceil(countBikes.proximity / 10) : 0} pageRangeDisplayed={10} marginPagesDisplayed={10}
            previousLabel={'previous'}
            nextLabel={'next'}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            onPageChange={(page) => {
                setLoad(true);
                dispatch(getStolenBikes({
                    page: page.selected + 1,
                    perPage: 10,
                    search:filter.search
                }));
            }} />
    </div>)
}