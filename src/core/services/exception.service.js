
import constants from '../constants/system.constants';

export const errorHandle = (error) =>{
   if(error.status === constants.UNAUTHORIZED) {
        console.log('Unauthorized')
   }
}