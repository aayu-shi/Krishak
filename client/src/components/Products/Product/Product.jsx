import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { Button } from "../../Button";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import useStyles from "./styles";
import styled from "styled-components";

const ButtonItem = styled.div`
  display: flex;
`;

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {/* used for text statemets in material ui, variant defines 
                                                                text size and gutterbottom means sapce at the bottom */}
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {" "}
          {/* textSecondary means slightly greyish color */}
          {product.descrption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button size={14} apperance="regular">
          <ButtonItem>
            <AddIcCallIcon />
            <div style={{ margin: "4px" }}>Contact Seller</div>
          </ButtonItem>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Product;
