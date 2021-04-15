
import constants from '../constants/system.constants';

export const errorHandler = (error) =>{
   if(error.status === constants.UNAUTHORIZED) {
        console.log('Unauthorized')
   }
}