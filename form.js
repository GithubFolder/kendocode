import React from 'react'
import Grid from '@mui/material/Grid';
import { Input } from '@progress/kendo-react-inputs';
import image1 from './image/image.jpg';
import { Card, CardActions, CardBody, CardHeader } from '@progress/kendo-react-layout';
import { CardContent } from '@mui/material';




function Login() {

    return (
        <div>
            <Card>
                <CardContent>

                    <Grid container spacing={2}>
                        <Grid xs={12} sm={6} item>
                            <Card
                                style={{
                                    width: "100%",
                                    paddingTop: '30px',
                                }}
                            >
                                <div
                                    style={{
                                        paddingBottom: "40px"
                                    }}
                                >

                                    <button
                                        style={{
                                            width: "70px",
                                            height: "40px",
                                            primary: 'rgb(255, 45, 85)',
                                            backgroundColor: "gray",
                                            color: "white"
                                        }}
                                    >Logo</button>
                                </div>

                                <CardHeader
                                    style={{
                                        color: "lightslategrey",
                                        fontSize: "40px",
                                        fontFamily: "serif",
                                        fontStyle: "bold"

                                    }}
                                >Login</CardHeader>
                                <p
                                    style={{
                                        fontSize: "20px",
                                        color: "gray"
                                    }}
                                >Please put your login credentials below to start using the app.</p>
                                <div>
                                    <CardBody>
                                        <div
                                            style={{
                                                paddingBottom: "30px"
                                            }}
                                        >
                                            <Input
                                                name="Sales Id"
                                                type="text"
                                                style={{
                                                    width: "100%",
                                                    color: "GrayText",
                                                    borderColor: "black"
                                                }}
                                                placeholder="sales id"
                                                required={true}
                                            />
                                        </div>


                                        <div
                                            style={{
                                                paddingBottom: "10px"
                                            }}
                                        >

                                            <Input
                                                name="Password"
                                                type="text"
                                                style={{
                                                    width: "100%",
                                                    borderColor: "black"
                                                }}
                                                placeholder="Password"
                                                pattern={"[[A-Za-z]+]"}
                                                minLength={6}
                                                maxLength={18}
                                                required={true}
                                            />
                                        </div>
                                    </CardBody>
                                </div>

                                <div>
                                    <CardActions
                                        style={{
                                            display: "flex",
                                            flexDirection: 'column'
                                        }}
                                    >

                                        <a href='/'
                                            style={{
                                                marginLeft: "10px",
                                                // marginRight: "0px",
                                                paddingBottom: "5px",
                                                fontSize:"15px"
                                            }}
                                        >Forget Password?</a>

                                        <button
                                            style={{
                                                width: "100%",
                                                height: "40px",
                                                primary: 'rgb(255, 45, 85)',
                                                backgroundColor: "gray",
                                            }}
                                        >
                                            Login
                                        </button>

                                    </CardActions>
                                </div>
                            </Card>

                        </Grid>
                        <Grid sx={12} sm={6} item>
                            <img src={image1} alt="" width="200px"
                                style={{
                                    margin: "40%",
                                    // marginLeft: "200px",
                                    marginTop:"200px",
                                    // marginBottom: "250px",
                                   
                                }}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
export default Login;