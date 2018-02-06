import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	textStyle: {
		color: 'white',
		paddingTop: 10,
		fontSize: 12,
		fontWeight: 'bold'
	},
	underlineStyle: {
		backgroundColor: '#ff8101'
	},
	tabBar: {
		backgroundColor: '#131313'
	},
	progressBar: {
		backgroundColor: '#0a0a0a',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		backgroundColor: '#0a0a0a',
	},
	linearGradient: {
		top: 0,
		left: 0,
		right: 0,
		height: 248,
		position: 'absolute'
	},
	imageBackdrop: {
		height: 248,
		backgroundColor: 'black'
	},
	cardContainer: {
		flex: 1,
		position: 'absolute',
		top: 207,
		/*right: 16,
		left: 16,*/
		flexDirection: 'row'
	},
	contentContainer: {
	flex: 1,
	//position: 'absolute',
	//marginTop: 57
},
	cardImage: {
		height: 184,
		width: 135,
		borderRadius: 3
	},
	cardDetails: {
		paddingLeft: 10,
		flex: 1,
		paddingTop: 50
	},
	cardTitle: {
		color: 'white',
		fontSize: 19,
		fontWeight: '500',
		paddingTop: 10
	},
	cardTagline: {
		color: 'white',
		fontSize: 15
	},
	cardGenre: {
		flexDirection: 'row'
	},
	cardGenreItem: {
		textAlign: 'left',
		fontSize: 11,
		marginRight: 5,
		color: 'white'
	},
	cardNumbers: {
		flexDirection: 'row',
		marginTop: 5
	},
	cardStar: {
		flexDirection: 'row'
	},
	cardStarRatings: {
		marginLeft: 5,
		fontSize: 12,
		color: 'white'
	},
	cardRunningHours: {
		marginLeft: 5,
		fontSize: 12
	},
	info: {
		width: 20,
		height: 20,
		marginLeft: 5,
		//marginRight:5
	},
	detailBox: {
		flexDirection: 'row'
	},
	detailb1: {
		flex:1,
		backgroundColor: '#000',
		marginTop:4,
		//width:window.width/3
	},
	detailb2: {
		flex:1,
		backgroundColor: '#000',
		marginTop: 25,
		marginLeft: -50
	}

});

export default styles;
