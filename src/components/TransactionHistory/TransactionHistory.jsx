import PropTypes from 'prop-types';
import {Transactions, TableHeader, HeaderRow, HeaderTitle, TableBody, BodyRow, BodyValue, } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <TableHeader>
        <HeaderRow>
          <HeaderTitle>Type</HeaderTitle>
          <HeaderTitle>Amount</HeaderTitle>
          <HeaderTitle>Currency</HeaderTitle>
        </HeaderRow>
      </TableHeader>

      <TableBody>
        {items.map(item => (
            <BodyRow key={item.id}>
              <BodyValue>{item.type}</BodyValue>
              <BodyValue>{item.amount}</BodyValue>
              <BodyValue>{item.currency}</BodyValue>
            </BodyRow>
          ))}
      </TableBody>
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

