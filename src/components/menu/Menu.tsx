import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import RoomIcon from '@mui/icons-material/Room';
import CategoryIcon from '@mui/icons-material/Category';
import ScaleIcon from '@mui/icons-material/Scale';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import EventIcon from '@mui/icons-material/Event';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import styles from './styles.module.scss'


const Menu=()=>{
const [form,setForm]= useState({
    category:'',
    locale:'',
    cost:'',
    weight:'',
    data_start:'',
    date_end:''})
const [category, setCategory] = useState([1,2,3,4,5])
    return(
        <div className={styles.menu}>
            <div className={styles.menu__form}>
            <Autocomplete
            className={styles.form__input}
               
                id="free-solo-demo"
                options={category}
                renderInput={(params) => 
                <TextField  
                {...params}
                    InputProps={{

                ...params.InputProps,
                        startAdornment: (
                        <InputAdornment position="start">
                            <CategoryIcon />
                        </InputAdornment>
                    ),
                }} 
                label="Категория продукта" 
                />}
            />

            <Autocomplete
                className={styles.form__input}
                multiple
                id="tags-outlined"
                options={category}
                filterSelectedOptions
                renderInput={(params) => (
                <TextField

                className={styles.form__text}
                    {...params}
                    InputProps={{

                        ...params.InputProps,
                                startAdornment: (
                                <InputAdornment position="start">
                                    <RoomIcon />
                                </InputAdornment>
                            ),
                        }} 
                    label="Локализация продукта"
                    placeholder="Локализация продукта"                    />
                )}
            />

<Autocomplete
                className={styles.form__input}
                id="free-solo-demo"
                options={category}
                renderInput={(params) => 
                <TextField  
                {...params}
                    InputProps={{

                ...params.InputProps,
                        startAdornment: (
                        <InputAdornment position="start">
                            <CurrencyRubleIcon />
                        </InputAdornment>
                    ),
                }} 
                label="Ориентировачная стоимость продукта" 
                />}
            />
            <Autocomplete
            className={styles.form__input}
            id="free-solo-demo"
            options={category}
            renderInput={(params) => 
            <TextField  
            {...params}
                InputProps={{

            ...params.InputProps,
                    startAdornment: (
                    <InputAdornment position="start">
                        <ScaleIcon />
                    </InputAdornment>
                ),
            }} 
            label="Вес единицы продутка" 
            />}
        />
            </div>
            
        </div>
    )
}

export default Menu