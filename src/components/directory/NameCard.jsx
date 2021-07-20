import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function NameCard({ names }) {

  const { fields } = names;
  return (

    <div className="card-container">

      <Card key={fields.firstName} className="cards" sx={{ width: 345, height: 600 }}>
        <div >
          <CardMedia
            component="img"
            alt={fields?.firstName}
            height="450"

            image={fields?.image}
            title={fields?.firstName}

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {fields?.firstName} {fields?.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {fields?.firstName} {fields?.lastName} is part of {fields?.house} house. What {fields?.firstName} fears most is {fields?.boggart}. {fields?.firstName}'s patronus is {fields?.patronus}.
            </Typography>
          </CardContent>
        </div>
      </Card>

    </div>

  );
}