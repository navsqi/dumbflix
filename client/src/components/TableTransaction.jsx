import React, { Component } from 'react';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getTransactions, updateTransaction } from '../redux/actions/transaction.action';
// import Loader from 'react-loader-spinner';
import * as dayjs from 'dayjs';

class TableTransaction extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  handleOnClick = (e) => {
    e.preventDefault();

    const { transaction, status } = e.target.dataset;
    console.log(transaction, status);

    if (transaction && status === 'true') {
      this.props.updateTransaction({ status: true }, transaction);
      setTimeout(() => {
        this.props.getTransactions();
      }, 250);
    } else if (transaction && status === 'false') {
      this.props.updateTransaction({ status: false }, transaction);
      setTimeout(() => {
        this.props.getTransactions();
      }, 250);
    }
  };

  render() {
    let number = 1;
    const { role } = this.props.user;
    const { transactions, loading, error } = this.props;
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>User</th>
              <th>Attachment</th>
              <th>Expires</th>
              <th>Status User</th>
              <th>Status Payment</th>
              {role === 'admin' ? <th>Action</th> : false}
            </tr>
          </thead>
          <tbody>
            {!loading && !error && transactions.length > 0
              ? transactions.map((transaction) => {
                  let diffDate = dayjs(transaction.dueDate).diff(
                    dayjs(new Date(Date.now())),
                    'day'
                  );

                  return (
                    <tr key={transaction.id}>
                      <td>{number++}</td>
                      <td>{transaction.user.fullName}</td>
                      <td>
                        <a
                          className="text-light"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`http://localhost:5000/images/${transaction.attachment}`}
                        >
                          {transaction.attachment}
                        </a>
                      </td>
                      <td>{`${
                        diffDate && diffDate > 0 && transaction.status ? diffDate : 0
                      } Day(s) remaining`}</td>
                      <td className={transaction.status ? 'text-success' : 'text-warning'}>
                        {transaction.status ? 'Active' : 'Inactive'}
                      </td>
                      <td className={transaction.status ? 'text-success' : 'text-warning'}>
                        {transaction.status ? 'Approved' : 'Pending'}
                      </td>
                      {role === 'admin' ? (
                        <td>
                          <DropdownButton
                            className="dropdown-action"
                            size="sm"
                            id="action-button"
                            title="Action"
                          >
                            <Dropdown.Item
                              onClick={this.handleOnClick}
                              data-transaction={transaction.id}
                              data-status={true}
                            >
                              Approved
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={this.handleOnClick}
                              data-transaction={transaction.id}
                              data-status={false}
                            >
                              Cancel
                            </Dropdown.Item>
                          </DropdownButton>
                        </td>
                      ) : (
                        false
                      )}
                    </tr>
                  );
                })
              : false}
            {/* <tr>
              <td>1</td>
              <td>Nauval Shidqi</td>
              <td>bukti1.jpg</td>
              <td>2 Days</td>
              <td className="text-success">Active</td>
              <td className="text-success">Approve</td>
              <td>
                <DropdownButton className="dropdown-action" size="sm" id="action-button">
                  <Dropdown.Item href="#/action-1">Approved</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Cancel</Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Edward Elric</td>
              <td>bukti1.jpg</td>
              <td>2 Days</td>
              <td className="text-success">Active</td>
              <td className="text-danger">Cancel</td>
              <td>
                <DropdownButton className="dropdown-action" size="sm" id="action-button">
                  <Dropdown.Item href="#/action-1">Approved</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Cancel</Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Lucius Artorius</td>
              <td>bukti1.jpg</td>
              <td>2 Days</td>
              <td className="text-warning">Not Active</td>
              <td className="text-success">Active</td>
              <td>
                <DropdownButton className="dropdown-action" size="sm" id="action-button">
                  <Dropdown.Item href="#/action-1">Approved</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Cancel</Dropdown.Item>
                </DropdownButton>
              </td>
            </tr> */}
          </tbody>
        </Table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    transactions: state.transactionReducer.transactions,
    loading: state.transactionReducer.loading,
    error: state.transactionReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTransactions: () => dispatch(getTransactions()),
    updateTransaction: (body, idTransaction) => dispatch(updateTransaction(body, idTransaction)),
  };
};

// Dynamic Page with withRouter
export default connect(mapStateToProps, mapDispatchToProps)(TableTransaction);
