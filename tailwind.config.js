module.exports = {
    purge: false,
    theme: {
        screens: {
            'md': '850px',
        },
        extend: {
            colors : {
                primary : '#342f39',
                secundary: '#d74553',
                lowContrast: '#e5757f' ,
                background: '#e9eaef',
                backgroundSecundary: '#e5757f'
            },
            fontFamily : {
                body : ['Dosis']
            }
        },
    },
    
    variants: {
       
        borderColor: ["hover", "focus"],
        borderStyle: ['hover', 'focus'], 
          
    },
    plugins: []
}