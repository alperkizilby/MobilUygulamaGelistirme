import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';

export default class DrawerMenu extends Component {
	navigateToScreen = (route) => () => {
		this.props.navigation.navigate(route)
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<TouchableOpacity
						onPress={this.navigateToScreen('Home')}
						style={styles.menuItem}>
						<Text style={styles.itemText}>Anasayfa</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.navigateToScreen('Contact')}
						style={styles.menuItem}>
						<Text style={styles.itemText}>Hesap Bilgileri</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem}>
						<Text style={styles.itemText}>Diğer</Text>
					</TouchableOpacity>
				</ScrollView>
				<View style={styles.footer}>
					<Text style={styles.footerText}>Mobil Aile Hekimliği</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f1f1f1',
		paddingVertical: 40
	},
	menuItem: {
		backgroundColor: '#e1e1e1',
		padding: 10,
	},
	itemText: {
		fontSize: 13,
		color: '#333'
	},
	footer: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: '100%',
		paddingVertical: 10
	},
	footerText: {
		textAlign: 'center',
		color: '#999',
		fontSize: 11
	}
});
