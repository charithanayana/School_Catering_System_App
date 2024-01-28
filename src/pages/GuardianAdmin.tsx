import SideNav from '../components/GuardianSideNav'
import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ShareIcon from '@mui/icons-material/Share';

function GuardianAdmin() {
  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '60px'}}>
        <SideNav />
        <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
          <Typography lineHeight={3} component="h1" variant="h4">
            Menu
          </Typography>
          <Box component="div" sx={{ display: 'flex' }}>
            {/* https://www.self.com/story/healthy-weeknight-dinners-anyone-cook */}
            <Card sx={{ maxWidth: 345, p: 1, m: 1 }}>
              <CardHeader
                title="Tuna Salad"
                subheader="Tuna salad"
              />
              <CardMedia
                component="img"
                height="194"
                image="/images/TunaSalad.jpeg"
                alt="Tuna Salad"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Nutrition Per Serving: 543 calories, 22 g fat (8 g saturated), 60 g carbs, 9 g fiber, 25 g protein
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add">
                  <AddIcon />
                </IconButton>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, p: 1, m: 1, textOverflow: "ellipsis" }}>
              <CardHeader
                title="Broccoli Cheddar Rice"
                subheader="Broccoli Cheddar Rice"
              />
              <CardMedia
                component="img"
                height="194"
                image="/images/BroccoliCheddarBrownRiceSkillet.jpg"
                alt="Tuna Salad"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Nutrition Per Serving: 543 calories, 22 g fat (8 g saturated), 60 g carbs, 9 g fiber, 25 g protein
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add">
                  <AddIcon />
                </IconButton>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, p: 1, m: 1, textOverflow: "ellipsis" }}>
              <CardHeader
                title="Black Bean Sweet Potato"
                subheader="Black Bean Sweet Potato"
              />
              <CardMedia
                component="img"
                height="194"
                image="/images/BrusselsSproutBlackBeanSweetPotato.jpg"
                alt="Tuna Salad"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Nutrition Per Serving: 543 calories, 22 g fat (8 g saturated), 60 g carbs, 9 g fiber, 25 g protein
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add">
                  <AddIcon />
                </IconButton>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345, p: 1, m: 1, textOverflow: "ellipsis" }}>
              <CardHeader
                title="Chicken Breast Kabocha"
                subheader="Chicken Breast Kabocha"
              />
              <CardMedia
                component="img"
                height="194"
                image="/images/ChickenBreastKabochaKale.jpg"
                alt="Tuna Salad"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Nutrition Per Serving: 543 calories, 22 g fat (8 g saturated), 60 g carbs, 9 g fiber, 25 g protein
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add">
                  <AddIcon />
                </IconButton>
              </CardActions>
            </Card>

          </Box>
        </Box>

      </Box>
    </>
  )
}

export default GuardianAdmin