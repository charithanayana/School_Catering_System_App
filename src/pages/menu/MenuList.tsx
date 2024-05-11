import SideNav from '../../components/GuardianSideNav'
import { Box, Button, ListItem, Rating, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate, Link } from "react-router-dom";
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';


function MenuList() {

  const navigate = useNavigate();

  const [menus, setMenus] = React.useState<any[]>([]);


    useEffect(() => {

        const res = axios.get("http://localhost:8080/catering/menus" , {
            headers: {
            'Content-Type': 'application/json'
            }
        }).then((response) => {
          setMenus(response.data);
        });

    }, []);

  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '60px' }}>
        <SideNav title='Home'/>
        <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
          <Typography lineHeight={3} component="h1" variant="h4">
            Menu
          </Typography>
          <Box component="div" sx={{ display: 'flex' }}>
            
            <Grid container spacing={2} direction="row">

            {menus.map((menu) => (

              <Grid item xs={3}>
                <Card sx={{ maxWidth: 345, p: 1, m: 1 }}>
                  <CardHeader
                    title={menu.name}
                    subheader={menu.description}
                  />
                  <CardMedia
                    component="img"
                    image="/images/no-image.png"
                    alt="{menu.name}"
                  />
                  <CardContent sx={ {width: 340}}>
                    <Typography variant="body2" color="text.secondary">
                    {menu.items.map((menuItem: any) => (
                      <div>{menuItem.nutrition}</div>
                    ))}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Link to={`/menu/${menu.id}`}>More</Link>
                  </CardActions>
                </Card>
              </Grid>  
              
            ))}

            </Grid>

          </Box>
        </Box>

      </Box>
    </>
  )
}

export default MenuList 