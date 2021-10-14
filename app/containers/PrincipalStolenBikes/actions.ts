import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const getStolenBikes = (props:any) => action(ActionTypes.GET_STOLEN_BIKES,props);

export const setStolenBikes = (bikes:Array<any>) => action(ActionTypes.SET_STOLEN_BIKES,bikes);


export const getCountBikes = (props:any) => action(ActionTypes.GET_COUNT_BIKES,props);

export const setCountBikes = (bikes:Array<any>) => action(ActionTypes.SET_COUNT_BIKES,bikes);

export const setErrorBikes = (error:any) => action(ActionTypes.ERROR_GET_STOLEN_BIKES,error);
