import { 
  Box, 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Chip, 
  Divider, 
  Rating, 
  Typography 
} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';

import { 
  ReactElement, 
  JSXElementConstructor, 
  ReactFragment, 
  ReactPortal, 
  Key 
} from "react";

import { CardInterface } from '../../rtk/store';
import useStyles from "./DetailsCardStyle";

function DetailsCard( props: CardInterface ) {
  const { place } = props;
  const hasName = place.name as boolean;
  const hasImage = place.photo as boolean;

  const { classes } = useStyles();

  if (hasName) {
    return (
      <Card elevation={ 2 } sx={{ maxWidth: '100%' }}>
        <CardMedia
          component="img"
          height="250px"
          image={ hasImage ? place?.photo?.images?.large?.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg' }
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            { place?.name }
          </Typography>
  
          <Box display="flex" justifyContent="space-between">
            <Rating name="rating" value={ place?.rating } precision={ 0.5 } readOnly className={ classes.subtitleStart }/>
            <Typography gutterBottom variant="subtitle1" className={ classes.subtitleEnd }>
              { place?.num_reviews } reviews
            </Typography>
          </Box>
  
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" className={ classes.subtitleStart }>
              Price
            </Typography>
            <Typography gutterBottom variant="subtitle1" className={ classes.subtitleEnd }>
              { place?.price }
            </Typography>
          </Box>
  
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" className={ classes.subtitleStart }>
              Ranking
            </Typography>
            <Typography gutterBottom variant="subtitle1" className={ classes.subtitleEnd }>
              { place?.ranking }
            </Typography>
          </Box>
  
          {
            place?.awards?.map((award: { images: { small: string | undefined; }; display_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, i: any) => 
              <Box key={ i } display="flex" justifyContent="space-between">
                <img src={ award?.images.small } alt="" className={ classes.iconReward }/>
                <Typography gutterBottom variant="subtitle1" className={ classes.subtitleEnd }>
                  { award?.display_name }
                </Typography>
              </Box>
            )
          }
  
          {
            place?.cuisine?.map((currentCuisine: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, i: Key | null | undefined) =>
              <Chip key={ i } label={ currentCuisine?.name } className={ classes.chip }/> 
            )
          }
  
          <Divider sx={{ marginBottom: '5px' }}/>
  
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" className={ classes.subtitleStart }>
              <PlaceIcon />
            </Typography>
            <Typography gutterBottom variant="subtitle1" className={ classes.subtitleEnd }>
              { place?.address }
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" className={ classes.subtitleStart }>
              <PhoneIcon />
            </Typography>
            <Typography gutterBottom variant="subtitle1" className={ classes.subtitleEnd }>
              { place?.phone }
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ () => window.open(place?.web_url, '_blank') }>Trip advisor</Button>
          <Button size="small" onClick={ () => window.open(place?.website, '_blank')}>Website</Button>
        </CardActions>
      </Card>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default DetailsCard;
