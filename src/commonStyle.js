export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
      },
      formContainer: {
        flex:1,
        alignContent:'center',
        justifyContent:'center',alignSelf:'center'
      },
      inputStyle = {
        borderWidth: 0,
        borderColor: '#4e4e4e',
        backgroundColor: '#e6f4ff',
        padding: 10,
        marginBottom: 5,
        width: deviceWidth * 0.78,
        alignSelf: 'center',
      },
      headerText: {
        width: deviceWidth * 0.92,
        height: deviceHeight * 0.06,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginBottom: 5,
      },
      buttonContainer: {
        width: 320,
        alignSelf: 'center',
        backgroundColor: '#0078d4',
        borderRadius: 4,
        marginTop: 25,
      },
      staticText: {
        fontSize: 14,
        color: '#A8A7A6',
        marginBottom: 8,
        fontFamily: 'OpenSans-Bold',
      },
      pickerStyle:{  
        fontFamily:'OpenSans-Bold',
        fontSize:14, 
        color: '#344953',  
        justifyContent: 'center', marginTop:-14 
    },
}
export default styles;