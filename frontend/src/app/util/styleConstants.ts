export const PRIMARY: string = '#f5e4b0';
export const SECONDARY: string = '#e82378';
export const SECONDARY_TRANSPARENT: string = 'rgba(232,35,120,0)';
export const TEXT_LIGHT: string = '#7bbaff';
export const TEXT_DARK: string = '#2a65a6';
export const TEXT_BACKGROUND_NOT_SELECTED: string = '#88dbf480';
export const TEXT_BACKGROUND_SELECTED: string = '#e1225861';

export const LIGHT_CORAL: string = '#e56b6f';
export const BUFF: string = '#eaac8b';
export const CHINESE_VIOLET: string = '#6d597a';
export const CHINESE_ROSE: string = '#b56576';
export const YINMN_BLUE: string = '#355070 ';



export const DOG_ATTRIBUTE_NAME_STYLE = {
    textAlign:'left',
    fontSize:'1.5rem',
    fontWeight: 'bold',
    color: TEXT_DARK,
    border: `0.3rem dotted ${TEXT_LIGHT}`,
    borderRadius: '3rem',
    padding: '0.5rem',
    marginBottom:'0.3rem',
    width:'100%',
}

export const DOG_ATTRIBUTE_VALUE_STYLE = {
    textAlign:'right',
    fontSize:'1.5rem',
    fontWeight: 'bold',
    color: SECONDARY,
    border: `0.3rem dotted ${TEXT_BACKGROUND_SELECTED}`,
    borderRadius: '3rem',
    padding: '0.5rem',
}

export const MENU_STYLE = {
    '& .MuiPaper-root': {
        background: SECONDARY,
        border: `0.3rem solid ${TEXT_LIGHT}`,
        borderRadius: '1rem',
    },
}