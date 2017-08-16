import _ from 'lodash';
import masterMedication from './masterMedications';

const header = _.filter( masterMedication, ( item, index ) => index === 0 );
const data = _.filter( masterMedication, ( item, index ) => index !== 0 );

const masterMedications = _.chain( data )
// map data to header element
  .map( dataVal => _.chain( header )
    // gets first element of array
      .head()
      .filter( headerVal => headerVal !== '' )
      // (headerVal) => !headerVal

      // acc array to iterate over
      // headVal the function that is called per iteration
      // index is the initual value
      // => sets the header element to the corresponding index in the data array. It is put into array and returned
      .reduce( ( acc, headerVal, index ) => {
        acc[headerVal] = dataVal[index];

        return acc;
      }, {} )
      // _.chain is a wrapper instance. .value() unwraps the result of the sequences made
      .value() )
  .value();

console.log( masterMedication );

export default masterMedications;
