import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	palette: {
		//Pink
		primary: {
			light: '#ffa2b0',
			main: '#fc758c',
			dark: '#ff5672',
		},
		//Gray
		secondary: {
			light: '#dee5e9',
			main: '#FFFFFF',
			dark: '#b0b0b0',
		}
	}
})
