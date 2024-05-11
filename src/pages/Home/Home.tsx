import React from "react";
import './home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useHref } from "react-router-dom";
import { link } from "fs";
import { Link } from 'react-router-dom';




export default function Home() {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <>
      <div>
        <header>
          <h2 className="logo">SCHOOL CATERING SERVICE</h2>
          <nav className="navigation">
            <a href="#">HOME</a>
            <a href="#">OUR MENU</a>
            <a href="#">OUR SERVICE & HISTORY</a>
            <a href="#">OUR FOOD</a>
            <a href="#">CONTACT US</a>
            <Link to={"/login"}>
              <button className="btnLogin-popup" >Login</button>
            </Link>
          </nav>
        </header>
        <section>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="slide img">
                  <img src='/images/is1.jpg' alt="banner 1" />
                  <div className="info">
                    <h2 className="info h2">HAPPY EATERS WELCOME.....YUMMY..</h2>
                    <button className="button-5" role="button">Button 5</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="slide img">
                  <img src='/images/is2.jpg' alt="banner 2" />
                  <div className="info">
                    <h2 className="info h22">AMAZING VARIETY...</h2>
                    <button className="button-5" role="button">Button 5</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="slide img">
                  <img src='/images/is3.jpg' alt="banner 3" />
                  <div className="info">
                    <h2 className="info h2">TOWARDS A HEALTHY EATER GENERATION...</h2>
                    <button className="button-5" role="button">Button 5</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="slide img">
                  <img src='/images/is4.jpg' alt="banner 4" />
                  <div className="info">
                    <h2 className="info h2">1 Lorem ipsum dolor</h2>
                    <button className="button-5" role="button">Button 5</button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section>
          <div className="intro">
            <img className="img1" src='/images/kid1.jpg' alt="kid 1" />
            <p>
              <br></br>
              <br></br>
              <h2>WELCOME TO SCHOOL CATERERS</h2>
              <br></br>
              <br></br>
              <br></br>
              At School Caterers, our goal is to bring Kid-approved, flavorful meals to schools. What kids call "Lunch", we call "nutrition". Our specialty is providing quality, healthy, delicious,
              well-balanced and nutritionally-enriched food for children. For the past 18 years,
              we have served millions of lunches to Bay Area kids and still serve Bay Area schools with honesty, dignity and above all, quality. This is our INDISPUTABLE CERTIFICATE to parents and schools.

            </p>
          </div>
        </section>
        <section>
          <br></br>
          <div className="card">

            <h1 className="h1">HOW WE WORK</h1>
            <br></br>
            <br></br>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 260 }}
                  image="/images/login.jpg"
                  title="SIGN IN & ORDER"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    SIGN IN & ORDER
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All users sign in to their accounts and select healthy school lunches. Order and pay online.
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 260 }}
                  image="/images/delivery.jpg"
                  title="COOK & DELIVER"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    COOK & DELIVER
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We cook and deliver same day to your child’s school. Parents can relax. Kids get healthy meals
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 260 }}
                  image="/images/serving.jpg"
                  title="SERVING"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    SERVING
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Serving up a feast of nourishment, empowering young minds.
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 260 }}
                  image="/images/enjoy.jpg"
                  title="ENJOY"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    ENJOY
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    When lunchtime arrives, kids can enjoy our variety of healthy school lunches.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </div>
          <br></br>
          <br></br>
        </section>
        <section>
          <div className="card1">

            <h1 className="h1">HOW WE WORK</h1>
            <br></br>
            <br></br>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 260 }}
                  image="/images/n1.jpg"
                  title="SIGN IN & ORDER"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                  REGULAR
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Kid-approved, flavorful meals are the choices in the REGULAR lunches. We have a wide variety of delicious meat lunches come under this category
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 260 }}
                  image="/images/n2.jpg"
                  title="COOK & DELIVER"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                  VEGETARIAN
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  We keep our VEGETARIAN meals alive by using authentic ingredients, cooked from scratch, using food in its simplest, most natural form.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 260 }}
                  image="/images/r1.jpg"
                  title="SERVING"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                  INDIAN
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  We are one of the very first companies to introduce Indian food to school lunches in Bay Area. Our authentic Indian dishes make kids happy.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Stack>
          </div>
        </section>
      </div>
    </>
  )
}