import * as React from "react"; 

// importing material UI components 
import AppBar from "@mui/material/AppBar"; 
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography"; 
import Button from "@mui/material/Button"; 
import PsychologyIcon from '@mui/icons-material/Psychology';

export function Header() { 
return ( 
	<AppBar position="static" color="primary"> 
		<Toolbar> 
            <PsychologyIcon/>
            <Typography variant="h6"
                component="div" sx={{ flexGrow: 1 }}> 
                ИИАСУ'23 
            </Typography> 
		<Toolbar> 
            <Button variant="text" color="inherit">Организаторы</Button>
            <Button variant="text" color="inherit">Программа</Button>
            <Button variant="text" color="inherit">Тематика</Button>
            <Button variant="text" color="inherit">Требования</Button>
        </Toolbar>
        <Button variant="outlined" color="inherit">Войти</Button> 
		</Toolbar> 
	</AppBar> 
); 
}
