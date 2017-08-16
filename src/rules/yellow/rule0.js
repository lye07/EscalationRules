// /**
//
//
// Flovent HFA (Fluticasone propionate)
// 50 mcg 1 puff bid
// Increase to 4 puffs bid
//
// */
//
// // Recommendation
//
// const recommendations = {
//    flovent: {
//        recommendation: (patientMeds) => {
//            return _.chain( patientMeds)
//            .filter(med => med.mame === 'flovent hfa' && med.dose === '50mcg' && med.puff === '1')
//            .map((med) => {
//                med.puff = 4,
//            })
//            .value();
//        }
//    }
// }
//
//
// _.chain( patientMeds)
// .filter(med => med.mame === 'flovent hfa' && med.dose === '50mcg' && med.puff === '1')
// .map((med) => {
//    med.puff = 4
// })
// .value()
//
//
// const recommendation = {
//    diskus: [
//
//    ]
// }
