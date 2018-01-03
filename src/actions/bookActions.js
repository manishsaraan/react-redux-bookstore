export const createBook = book => {
	return {
		type : 'CREATE_BOOK',
		book : book
	}
}

export const getBooks = () => {
	return {
		type : 'BOOK_LIST'
	}
}