export default {
	
		changecity (state, name) {
			state.city = name
			try {
				localStorage.city = name
			} catch (e) {
				
			}
			
		}
	
}
