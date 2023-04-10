// import PropTypes from 'prop-types';

// const TransactionHistory = ({ items }) => {
//   return (
//     <Transactions>
//       <TableHeader>
//         <HeaderRow>
//           <HeaderTitle>Type</HeaderTitle>
//           <HeaderTitle>Amount</HeaderTitle>
//           <HeaderTitle>Currency</HeaderTitle>
//         </HeaderRow>
//       </TableHeader>

//       <TableBody>
//         {items.map(({ id, type, amount, currency }) => {
//           return (
//             <BodyRow>
//               <BodyValue>{type}</BodyValue>
//               <BodyValue>{amount}</BodyValue>
//               <BodyValue>{currency}</BodyValue>
//             </BodyRow>
//           );
//         })}
//       </TableBody>
//     </Transactions>
//   );
// };

// TransactionHistory.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };

// export default TransactionHistory;
