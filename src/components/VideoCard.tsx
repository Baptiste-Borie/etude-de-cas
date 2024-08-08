import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import "./VideoCard.css";
import LikeDislike from "./interactions/LikeDislike";

type VideoCardType = {
  title: string;
  year: string;
  poster: string;
  like: number;
  dislike: number;
  onDelete: () => void;
};

const VideoCard = ({
  title,
  year,
  poster,
  like,
  dislike,
  onDelete,
}: VideoCardType) => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const handleDelete = () => {
    handleClose();
    onDelete();
  };

  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon style={{ color: "white" }} />
          </IconButton>
        }
      />
      <CardMedia component="img" alt={title} image={poster} />
      <CardContent>
        <div className="info">
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2" color="rgb(116, 114, 114)">
            {year}
          </Typography>
        </div>
        <div className="action">
          <CardActions disableSpacing={true}>
            <LikeDislike initialLike={like} initialDislike={dislike} />
          </CardActions>
        </div>
      </CardContent>

      <Menu
        anchorEl={anchorElement}
        open={Boolean(anchorElement)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </Menu>
    </Card>
  );
};

export default VideoCard;
