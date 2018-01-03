import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../actions/bookActions';

class Book extends React.Component{
  constructor(props){
    // Pass props back to parent
    super(props);
  }

  // Submit book handler
  submitBook(input){
    this.props.createBook(input);
  }
  componentDidMount(){
    this.props.getBooks();
  }
  render(){
    // Title input tracker
    let titleInput;
    // return JSX
    return(
      <div>
        <h3>Books</h3>
        <ul>
          {/* Traverse books array  */}
          {this.props.books.map((b, i) => <li key={i}>{b.title}</li> )}
        </ul>
        <div>
          <h3>Books Form</h3>
          <form onSubmit={e => {
            // Prevent request
            e.preventDefault();
            // Assemble inputs
            var input = {title: titleInput.value};
            // Call handler
            this.submitBook(input);
            // Reset form
            e.target.reset();
          }}>
            <input type="text" name="title" ref={node => titleInput = node}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}
//map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    books : state.books
  }
};

//Map actions to props
const mapDispatchToProps = dispatch => {
  return {
    createBook : book => dispatch(bookActions.createBook(book)),
    getBooks : () => dispatch(bookActions.getBooks()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Book);