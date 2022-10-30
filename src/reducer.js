const reducer = ( state = 0, { type, value } ) => {
	switch( type ){
		case 'INC':
			return state + 1

		case 'DEC':
			return state - 1

		case 'RND':
			return state + value

		default:
			return state
	}
}

export default reducer