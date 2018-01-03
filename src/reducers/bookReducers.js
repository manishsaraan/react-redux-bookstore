export default (state = [], action) => {	
	switch(action.type){
		case  'CREATE_BOOK' :
		  return [
            ...state,
            Object.assign({}, action.book)
		  ];
		case 'BOOK_LIST' : 
          return getBooks();
		default : 
		  return state;
	}
}

const getBooks = () => {
	 return [{
	 	title : 'book1'
	 },
	 {
	 	title : 'book2'
	 }];
}