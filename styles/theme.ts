export const theme = {
    colors: {
        base: '#DFDCE3',
        warning: '#FC4A1A',
        attention: '#F7B733',
        free: '#4ABDAC',
        warningLight: 'rgba(252, 74, 26, 0.1)',
        attentionLight: 'rgba(247, 183, 51, 0.3)',
        freeLight: 'rgba(74, 189, 172, .5)',
        light: '#FFFFFF',
        dark: '#000000',
    },
    size: {
        xs: 0,
        sm: '300px',
        md: '576px',
        lg: '768px',
        xl: '992px',
        xxl: '1200px',
    }
}

export type ThemeType = typeof theme;